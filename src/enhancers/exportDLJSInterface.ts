/// <reference path="../types/external.d.ts" />

import {
  Adapter,
  AdapterCreator,
  AdapterEnhancer,
  AdapterOptions,
  AdapterState,
  ReadyState
} from '../types/AdapterTypes';
import Observable, { Observer } from 'core-js/features/observable';

import AbortController from 'abort-controller-es5';
import { IDirectLineActivity } from '../types/DirectLineTypes';
import shareObservable from '../utils/shareObservable';
import uniqueId from '../ic3/utils/uniqueId';

export enum ConnectionStatus {
  Uninitialized = 0,
  Connecting = 1,
  Connected = 2,
  FailedToConnect = 4
}

export interface IDirectLineJS {
  activity$: Observable<IDirectLineActivity>;
  connectionStatus$: Observable<ConnectionStatus>;
  end: () => void;
  postActivity: (activity: IDirectLineActivity) => Observable<string>;
}

export default function exportDLJSInterface<TAdapterState extends AdapterState>(): AdapterEnhancer<
  IDirectLineActivity,
  TAdapterState
> {
  return (next: AdapterCreator<IDirectLineActivity, TAdapterState>) => (
    options: AdapterOptions
  ): Adapter<IDirectLineActivity, TAdapterState> & IDirectLineJS => {
    const adapter = next(options);
    let connectionStatusObserver: Observer<ConnectionStatus>;

    adapter.addEventListener('open', () => {
      connectionStatusObserver.next(ConnectionStatus.Connected);
    });

    adapter.addEventListener('error', () => {
      connectionStatusObserver.next(
        adapter.getReadyState() === ReadyState.CLOSED ? ConnectionStatus.FailedToConnect : ConnectionStatus.Connecting
      );
    });

    return {
      ...adapter,

      activity$: shareObservable(
        new Observable(observer => {
          const abortController = new AbortController();

          (async function () {
            try {
              for await (const activity of adapter.activities({ signal: abortController.signal })) {
                observer.next(activity);
              }

              observer.complete();
            } catch (error) {
              observer.error(error);
            }
          })();

          return () => {
            abortController.abort();
          };
        })
      ),

      connectionStatus$: shareObservable(
        new Observable(observer => {
          observer.next(ConnectionStatus.Uninitialized);
          observer.next(ConnectionStatus.Connecting);

          connectionStatusObserver = observer;

          return () => {
            connectionStatusObserver = undefined;
          };
        })
      ),

      end: () => adapter.close(),

      postActivity(activity: IDirectLineActivity) {
        return new Observable(observer => {
          (async function () {
            await adapter.egress(activity, 
              {
              progress: ({ id }: { id?: string }) => id && observer.next(id)
            });
            //await adapter.ingress({...activity, id: uniqueId()}); //No need to call ingress as IC3 is providing echo back. If we need this for DL, a new class for IC3 should be created
            observer.complete();
          })();
        });
      }
    };
  };
}
