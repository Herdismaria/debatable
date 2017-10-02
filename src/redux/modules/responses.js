import {
  FETCHING_RESPONSE,
  FETCHING_RESPONSE_ERROR,
  FETCHING_RESPONSE_SUCCESS,
  ADD_RESPONSE,
  ADD_MULTIPLE_RESPONSES,
  REMOVE_FETCHING,
  UPDATING_RESPONSE_TEXT,
} from '../constants';
import { Map, List } from 'immutable';
import { saveResponse } from '../../helpers/api';
import { formatResponse } from '../../helpers/utils';

export function fetchingResponse() {
  return {
    type: FETCHING_RESPONSE,
  };
}

export function fetchingResponseFailure(error) {
  return {
    type: FETCHING_RESPONSE_ERROR,
    error: 'Error fetching response',
  };
}

export function fetchingResponseSuccess(response) {
  return {
    type: FETCHING_RESPONSE_SUCCESS,
    response,
  };
}

export function addingResponse(response) {
  return {
    type: ADD_RESPONSE,
    response,
  };
}

export function addMultipleResponses(responses) {
  return {
    type: ADD_MULTIPLE_RESPONSES,
    responses,
  };
}

export function removeFetching() {
  return {
    type: REMOVE_FETCHING,
  };
}

export function updateResponseText(text) {
  return {
    type: UPDATING_RESPONSE_TEXT,
    text,
  };
}

export function addResponse(responseText) {
  return function(dispatch, getState) {
    const uid = getState().users.authedId;
    const user = getState().users[uid].info;
    const debateId = getState().debate.get('debateId');
    console.log(debateId);
    const response = formatResponse(responseText, user);
    saveResponse(debateId, response)
      .then(responseWithId => {
        dispatch(addingResponse(responseWithId));
      })
      .catch(error => console.warn('Error in addResp: ', error));
  };
}

const initialState = Map({
  isFetching: false,
  error: '',
  responseText: '',
});

export default function responses(state = initialState, action) {
  switch (action.type) {
    case FETCHING_RESPONSE:
      return state.merge({
        isFetching: true,
        error: '',
      });
    case FETCHING_RESPONSE_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case ADD_RESPONSE:
    case FETCHING_RESPONSE_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        [action.responseId]: action.response,
      });
    case ADD_MULTIPLE_RESPONSES:
      return state.merge(action.responseIds);
    case REMOVE_FETCHING:
      return state.merge({
        isFetching: false,
        error: '',
      });
    case UPDATING_RESPONSE_TEXT:
      return state.merge({
        responseText: action.text,
      });
    default:
      return state;
  }
}
