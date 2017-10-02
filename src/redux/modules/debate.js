import { Map, fromJS } from 'immutable';
import {
  FETCHING_DEBATE,
  FETCHING_DEBATE_ERROR,
  FETCHING_DEBATE_SUCCESS,
  ADD_RESPONSE,
} from '../constants';
import { fetchDebate } from '../../helpers/api';

export function fetchingDebate() {
  return {
    type: FETCHING_DEBATE,
  };
}

export function fetchingDebateError(error) {
  return {
    type: FETCHING_DEBATE_ERROR,
    error: 'Error fetching debate',
  };
}

export function fetchingDebateSuccess(debate) {
  return {
    type: FETCHING_DEBATE_SUCCESS,
    debate,
  };
}

export function fetchAndHandleDebate() {
  return function(dispatch) {
    dispatch(fetchingDebate());
    return fetchDebate()
      .then(debate => dispatch(fetchingDebateSuccess(debate)))
      .catch(error => dispatch(fetchingDebateError(error)));
  };
}

const initialState = Map({
  isFetching: true,
  error: '',
});

export default function debate(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DEBATE:
      return state.merge({
        isFetching: true,
      });
    case FETCHING_DEBATE_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error,
      });
    case FETCHING_DEBATE_SUCCESS:
      return state.merge({
        isFetching: false,
        error: '',
        ...action.debate,
      });
    case ADD_RESPONSE:
      let currCount = state.get('responseCount');
      return state.merge({
        responseCount: currCount + 1,
      });
    default:
      return state;
  }
}
