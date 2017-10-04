import { ref } from '../config/constants';
import { List } from 'immutable';

export function fetchUser(uid) {
  return ref
    .child(`users/${uid}`)
    .once('value')
    .then(snapshot => snapshot.val());
}

export function fetchDebate() {
  return ref
    .child('debates/currentDebate')
    .once('value')
    .then(snapshot => snapshot.val());
}

export function fetchUserResponses(uid, debateId) {
  return ref
    .child(`/userResponses/${uid}/${debateId}`)
    .once('value')
    .then(snapshot => {
      return snapshot.val() || {};
    });
}
//setting up listener, does not return a promise
export function listenToFeed(cb, errorCb, debateId) {
  let timesCalled = 0;
  ref.child(`/responses/${debateId}`).on(
    'value',
    snapshot => {
      const feed = snapshot.val() || {};
      const sortedIds = Object.keys(feed).sort((a, b) => {
        return feed[a].timestamp - feed[b].timestamp;
      });
      let initialFetch = timesCalled++ <= 0;
      cb({ feed, sortedIds }, initialFetch); //return the data from firebase and the sorted ids
    },
    errorCb,
  ); // error callback
}

export function addToResponses(debateId, response) {
  const responseId = ref.child(`/responses/${debateId}`).push().key;
  const responsePromise = ref
    .child(`/responses/${debateId}/${responseId}`)
    .set({ ...response, responseId });

  return {
    responseId,
    responsePromise,
  };
}

export function addToUsersResponses(debateId, uid, responseId) {
  return ref.child(`/userResponses/${uid}/${debateId}/${responseId}`).set(true);
}

export function updateResponseCount() {
  return ref
    .child('debates/currentDebate/responseCount')
    .transaction((currentValue = 0) => currentValue + 1);
}

export function saveResponse(debateId, response) {
  const uid = response.uid;
  const { responseId, responsePromise } = addToResponses(debateId, response);
  return Promise.all([
    responsePromise,
    addToUsersResponses(debateId, uid, responseId),
    updateResponseCount(),
  ]).then(() => ({ ...response, responseId }));
}

/*export function addDebate() {
  const id = ref.child('debates/currentDebate').push().key;
  ref.child('debates/currentDebate').set({
    debateId: id,
    topic: 'Does god exist?',
    startTime: Date.now(),
    endTime: '',
    responseCount: 0,
  });
}*/
