import * as userActionCreators from '../../redux/modules/users';
import { expect } from 'chai';
import { users } from '../../redux/modules/';

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    uid: '',
    avatar: '',
  },
};

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
};

describe('User action creators', () => {
  describe('authUser', () => {
    it('should return a authUser action', () => {
      const expectedAction = {
        type: 'AUTH_USER',
        uid: 'someId',
      };
      expect(userActionCreators.authUser('someId')).to.deep.equal(
        expectedAction,
      );
    });
  });
  describe('unauthUser', () => {
    it('should return a unauthUser action', () => {
      const expectedAction = {
        type: 'UNAUTH_USER',
      };
      expect(userActionCreators.unautUser()).to.deep.equal(expectedAction);
    });
  });
  describe('fetchingUser', () => {
    it('should return a fetchingUser action', () => {
      const expectedAction = {
        type: 'FETCHING_USER',
      };
      expect(userActionCreators.fetchingUser()).to.deep.equal(expectedAction);
    });
  });
  describe('fetchingUserFailure', () => {
    it('should return a fetchingUserFailure action', () => {
      const expectedAction = {
        type: 'FETCHING_USER_FAILURE',
        error: 'Error fetching user',
      };
      expect(
        userActionCreators.fetchingUserFailure('some error'),
      ).to.deep.equal(expectedAction);
    });
  });
  describe('fetchingUserSuccess', () => {
    it('should return a fetchingUserSuccess action', () => {
      const expectedAction = {
        type: 'FETCHING_USER_SUCCESS',
        uid: 'someId',
        user: { name: 'somename' },
        timestamp: 'some timestamp',
      };
      expect(
        userActionCreators.fetchingUserSuccess(
          'someId',
          { name: 'somename' },
          'some timestamp',
        ),
      ).to.deep.equal(expectedAction);
    });
  });
  describe('removeFetchingUser', () => {
    it('should return a removeFetchingUser action', () => {
      const expectedAction = {
        type: 'REMOVE_FETCHING_USER',
      };
      expect(userActionCreators.removeFetchingUser()).to.deep.equal(
        expectedAction,
      );
    });
  });
});

/* REDUCER */
describe('Users reducer', () => {
  describe('authUser', () => {
    it('should set isAuthed to true and add authedId', () => {
      const action = {
        type: 'AUTH_USER',
        uid: 'someid',
      };
      const expectedState = {
        isFetching: true,
        error: '',
        isAuthed: true,
        authedId: 'someid',
      };

      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('unauthUser', () => {
    it('should set isAuthed to false and remove authedId', () => {
      const action = {
        type: 'UNAUTH_USER',
      };
      const expectedState = {
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      };

      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('fetchingUser', () => {
    it('should set isFetching to true', () => {
      const action = {
        type: 'FETCHING_USER',
      };
      const expectedState = {
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      };

      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('fetchingUserFailure', () => {
    it('should set isFetching to false and error to message', () => {
      const action = {
        type: 'FETCHING_USER_FAILURE',
        error: 'Error fetching user',
      };
      const expectedState = {
        isFetching: false,
        error: 'Error fetching user',
        isAuthed: false,
        authedId: '',
      };
      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('fetchingUserSuccess', () => {
    it('If user is not null, should set isFetching to false, add user to state', () => {
      const action = {
        type: 'FETCHING_USER_SUCCESS',
        uid: 'uid',
        user: {
          name: 'some name',
          uid: 'uid',
          avatar: 'some img',
        },
        timestamp: 'now',
      };
      const expectedState = {
        isFetching: false,
        error: '',
        isAuthed: false,
        authedId: '',
        uid: {
          lastUpdated: 'now',
          info: {
            name: 'some name',
            uid: 'uid',
            avatar: 'some img',
          },
        },
      };
      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('fetchingUserSuccess', () => {
    it('If user is null, should set isFetching to false', () => {
      const action = {
        type: 'FETCHING_USER_SUCCESS',
        uid: 'uid',
        user: null,
        timestamp: 'now',
      };
      const expectedState = {
        isFetching: false,
        error: '',
        isAuthed: false,
        authedId: '',
      };
      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
  describe('removeFetchingUser', () => {
    it('should return a removeFetchingUser action', () => {
      const action = {
        type: 'REMOVE_FETCHING_USER',
      };
      const expectedState = {
        isFetching: false,
        error: '',
        isAuthed: false,
        authedId: '',
      };

      expect(users(initialState, action)).to.deep.equal(expectedState);
    });
  });
});
