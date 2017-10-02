import { ref, firebaseAuth } from '../config/constants';
import { addDebate } from './api';

export function auth(authType) {
  switch (authType) {
    case 'FACEBOOK_AUTH':
      return firebaseAuth().signInWithPopup(
        new firebaseAuth.FacebookAuthProvider(),
      );
    case 'TWITTER_AUTH':
      return firebaseAuth().signInWithPopup(
        new firebaseAuth.TwitterAuthProvider(),
      );
    case 'GOOGLE_AUTH':
    default:
      return firebaseAuth().signInWithPopup(
        new firebaseAuth.GoogleAuthProvider(),
      );
  }
}

export function checkIfAuthed(store) {
  return store.getState().users.isAuthed;
}

export function logout() {
  //addDebate();
  return firebaseAuth().signOut();
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user);
}
