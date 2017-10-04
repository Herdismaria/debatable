import {
  ADD_RESPONSE,
  FETCHING_USER_RESPONSES,
  FETCHING_USER_RESPONSES_ERROR,
  FETCHING_USER_RESPONSES_SUCCESS,
  UNAUTH_USER,
} from '../constants';

import { Map } from 'immutable';
import { fetchUserResponses } from '../../helpers/api';

export function fetchingUserResponses() {
  return {
    type: FETCHING_USER_RESPONSES,
  };
}

export function fetchingUserResponsesFailure(error) {
  return {
    type: FETCHING_USER_RESPONSES_ERROR,
    error: 'Error fetching user responses',
  };
}

export function fetchingUserResponsesSuccess(responseIds) {
  return {
    type: FETCHING_USER_RESPONSES_SUCCESS,
    responseIds,
  };
}

export function fetchAndHandleUserResponses() {
  return function(dispatch, getState) {
    const uid = getState().users.authedId;
    const debateId = getState().debate.get('debateId');
    dispatch(fetchingUserResponses);
    return fetchUserResponses(uid, debateId)
      .then(responseIds => {
        dispatch(fetchingUserResponsesSuccess(responseIds));
      })
      .catch(error => dispatch(fetchingUserResponsesFailure(error)));
  };
}

const initialState = Map({
  isFetching: false,
  error: '',
});

export default function userResponses(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER_RESPONSES:
      return state.merge({
        isFetching: true,
      });
    case FETCHING_USER_RESPONSES_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case FETCHING_USER_RESPONSES_SUCCESS:
      return state
        .merge({
          isFetching: false,
          error: '',
        })
        .merge(action.responseIds);
    case ADD_RESPONSE:
      return state.merge({
        [action.response.responseId]: true,
      });
    case UNAUTH_USER:
      return initialState;
    default:
      return state;
  }
}
