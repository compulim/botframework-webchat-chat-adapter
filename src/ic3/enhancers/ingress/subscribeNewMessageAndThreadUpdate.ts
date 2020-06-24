/// <reference path="../../../types/ic3/external/Model.d.ts" />

import { IC3AdapterState, StateKey } from '../../../types/ic3/IC3AdapterState';

import { AdapterEnhancer } from '../../../types/AdapterTypes';
import { IC3DirectLineActivity } from '../../../types/ic3/IC3DirectLineActivity';
import { IDirectLineActivity } from '../../../types/DirectLineTypes';
import Observable from 'core-js/features/observable';
import applySetStateMiddleware from '../../../applySetStateMiddleware';
import { compose } from 'redux';
import createThreadToDirectLineActivityMapper from './mappers/createThreadToDirectLineActivityMapper';
import createTypingMessageToDirectLineActivityMapper from './mappers/createTypingMessageToDirectLineActivityMapper';
import createUserMessageToDirectLineActivityMapper from './mappers/createUserMessageToDirectLineActivityMapper';

export default function createSubscribeNewMessageAndThreadUpdateEnhancer(): AdapterEnhancer<
  IC3DirectLineActivity,
  IC3AdapterState
> {
  return applySetStateMiddleware<IC3DirectLineActivity, IC3AdapterState>(({ getState, subscribe }) => {
    const convertMessage = compose(
      createUserMessageToDirectLineActivityMapper({ getState }),
      createTypingMessageToDirectLineActivityMapper({ getState })
    )(message => console.warn('IC3: Unknown type of message; ignoring message.', message));

    const convertThread = createThreadToDirectLineActivityMapper({ getState })(thread =>
      console.warn('IC3: Unknown type of thread; ignoring thread.', thread)
    );

    return next => (key: keyof IC3AdapterState, value: any) => {
      key === StateKey.Conversation &&
        subscribe(
          !!value &&
            new Observable<IC3DirectLineActivity>(subscriber => {
              const conversation = value as Microsoft.CRM.Omnichannel.IC3Client.Model.IConversation;
              const next = subscriber.next.bind(subscriber);

              // TODO: Currently, there is no way to unsubscribe. We are using this flag to fake an "unregisterOnXXX".
              let unsubscribed: boolean;

              (async function () {
                (await conversation.getMessages()).forEach(async message => {
                  let activity = await convertMessage(message);
                  !unsubscribed && next(activity);
                });

                conversation.registerOnNewMessage(async message => {
                  let activity: any = await convertMessage(message);
                  !unsubscribed && next(activity);
                });

                conversation.registerOnThreadUpdate(async thread => {
                  !unsubscribed && next(await convertThread(thread));
                });
              })();

              return () => {
                unsubscribed = true;
              };
            })
        );

      return next(key, value);
    };
  });
}
