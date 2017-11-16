import {
  SETTING_FEED_LISTENER,
  SETTING_FEED_LISTENER_SUCCESS,
  SETTING_FEED_LISTENER_ERROR,
  ADD_NEW_RESPONSE_ID_TO_FEED,
  RESET_NEW_RESPONSES_AVAILABLE,
} from '../constants';
import { Map, List } from 'immutable';
import { addListener } from './listeners';
import { listenToFeed } from '../../helpers/api';
import { addMultipleResponses } from './responses';

export function settingFeedListener() {
  return {
    type: SETTING_FEED_LISTENER,
  };
}

export function settingFeedListenerSuccess(responseIds) {
  return {
    type: SETTING_FEED_LISTENER_SUCCESS,
    responseIds,
  };
}

export function settingFeedListenerError(error) {
  return {
    type: SETTING_FEED_LISTENER_ERROR,
    error: 'Error fetching responses',
  };
}

export function resetNewResponsesAvailable() {
  return {
    type: RESET_NEW_RESPONSES_AVAILABLE,
  };
}

export function addNewResponseIdToFeed(responseId) {
  return {
    type: ADD_NEW_RESPONSE_ID_TO_FEED,
    responseId,
  };
}

export function setAndHandleFeedListener() {
  return function(dispatch, getState) {
    if (getState().listeners.feed === true) {
      return;
    }

    const debateId = getState().debate.get('debateId');

    dispatch(addListener('feed'));
    dispatch(settingFeedListener());
    listenToFeed(
      ({ feed, sortedIds }, initialFetch) => {
        dispatch(addMultipleResponses(feed));
        dispatch(settingFeedListenerSuccess(sortedIds));
      },
      error => dispatch(settingFeedListenerError(error)),
      debateId
    );
  };
}

const initialState = Map({
  newResponsesAvailable: false,
  newResponsesToAdd: List(),
  isFetching: false,
  error: '',
  responseIds: List(),
});

export default function feed(state = initialState, action) {
  switch (action.type) {
    case SETTING_FEED_LISTENER:
      return state.merge({
        isFetching: true,
      });
    case SETTING_FEED_LISTENER_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case SETTING_FEED_LISTENER_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        newResponsesAvailable: false,
        responseIds: List(action.responseIds),
      });
    case RESET_NEW_RESPONSES_AVAILABLE:
      return state.merge({
        responseIds: state
          .get('responseIds')
          .concat(state.get('newResponsesToAdd')),
        newResponsesToAdd: List(),
        newResponsesAvailable: false,
      });
    case ADD_NEW_RESPONSE_ID_TO_FEED:
      return state.merge({
        newResponsesToAdd: state
          .get('newResponsesToAdd')
          .unshift(action.responseId),
        newResponsesAvailable: true,
      });
    default:
      return state;
  }
}
