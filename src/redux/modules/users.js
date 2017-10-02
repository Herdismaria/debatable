import { auth, logout, saveUser } from '../../helpers/auth';
import { formatUserInfo } from '../../helpers/utils';
import { fetchUser } from '../../helpers/api';
import {
  AUTH_USER,
  UNAUTH_USER,
  FETCHING_USER,
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS,
  REMOVE_FETCHING_USER,
} from '../constants';

export function authUser(uid) {
  return {
    type: AUTH_USER,
    uid,
  };
}

export function unautUser() {
  return {
    type: UNAUTH_USER,
  };
}

export function fetchingUser() {
  return {
    type: FETCHING_USER,
  };
}

export function fetchingUserFailure(error) {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user',
  };
}

export function fetchingUserSuccess(uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  };
}

export function removeFetchingUser() {
  return {
    type: REMOVE_FETCHING_USER,
  };
}

export function fetchAndHandleUser(uid) {
  return function(dispatch) {
    dispatch(fetchingUser());
    return fetchUser(uid)
      .then(user => dispatch(fetchingUserSuccess(uid, user, Date.now())))
      .catch(error => dispatch(fetchingUserFailure(error)));
  };
}

export function fetchAndHandleAuthedUser(authType) {
  return function(dispatch) {
    dispatch(fetchingUser());
    return auth(authType)
      .then(({ user, credential }) => {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(
          userData.displayName,
          userData.photoURL,
          user.uid,
        );
        return dispatch(fetchingUserSuccess(user.uid, userInfo, Date.now()));
      })
      .then(({ user }) => saveUser(user))
      .then(user => dispatch(authUser(user.uid)))
      .catch(error => dispatch(fetchingUserFailure(error)));
  };
}

export function logoutAndUnauth() {
  return function(dispatch) {
    logout();
    dispatch(unautUser());
  };
}

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
};

function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp,
      };
    default:
      return state;
  }
}

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: '',
      };
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
            ...state,
            isFetching: false,
            error: '',
          }
        : {
            ...state,
            isFetching: false,
            error: '',
            [action.uid]: user(state[action.uid], action),
          };
    case REMOVE_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
