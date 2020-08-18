import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClImtoSOYGeOoAd-JzIuCgrcHQZVuz5-c",
  authDomain: "tinder-53336.firebaseapp.com",
  databaseURL: "https://tinder-53336.firebaseio.com",
  projectId: "tinder-53336",
  storageBucket: "tinder-53336.appspot.com",
  messagingSenderId: "1093701752781",
  appId: "1:1093701752781:web:6eb7df1dc1449d0b1b5684",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
