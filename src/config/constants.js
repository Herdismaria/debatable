import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAgJkJIGatsQ4dQMsS1l3Jc8iI7P0FDZb8',
  authDomain: 'debatable-0.firebaseapp.com',
  databaseURL: 'https://debatable-0.firebaseio.com',
  projectId: 'debatable-0',
  storageBucket: 'debatable-0.appspot.com',
  messagingSenderId: '866966352384',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
