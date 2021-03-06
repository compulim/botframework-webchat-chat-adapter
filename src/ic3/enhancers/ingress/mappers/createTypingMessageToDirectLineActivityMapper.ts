/// <reference path="../../../../types/ic3/external/Model.d.ts" />

import { IC3AdapterState, StateKey } from '../../../../types/ic3/IC3AdapterState';

import { ActivityType } from '../../../../types/DirectLineTypes';
import { AsyncMapper } from '../../../../types/ic3/AsyncMapper';
import { GetStateFunction } from '../../../../types/AdapterTypes';
import { IC3DirectLineActivity } from '../../../../types/ic3/IC3DirectLineActivity';
import { IC3_CHANNEL_ID } from '../../../Constants';
import uniqueId from '../../../utils/uniqueId';

export default function createTypingMessageToDirectLineActivityMapper({
  getState
}: {
  getState: GetStateFunction<IC3AdapterState>;
}): AsyncMapper<Microsoft.CRM.Omnichannel.IC3Client.Model.IMessage, IC3DirectLineActivity> {
  return next => async (message: Microsoft.CRM.Omnichannel.IC3Client.Model.IMessage) => {
    if (message.messageType !== Microsoft.CRM.Omnichannel.IC3Client.Model.MessageType.Typing && message.messageType !== Microsoft.CRM.Omnichannel.IC3Client.Model.MessageType.ClearTyping) {
      return next(message);
    }

    const conversation: Microsoft.CRM.Omnichannel.IC3Client.Model.IConversation = getState(StateKey.Conversation);

    if (!conversation) {
      throw new Error('IC3: Failed to ingress without an active conversation.');
    }

    const {
      sender: { displayName: name, id },
      timestamp
    } = message;

    return {
      channelId: IC3_CHANNEL_ID,
      conversation: { id: conversation.id },
      from: {
        id,
        name
      },
      id: uniqueId(),
      timestamp: timestamp.toISOString(),
      type: ActivityType.Typing
    };
  };
}
