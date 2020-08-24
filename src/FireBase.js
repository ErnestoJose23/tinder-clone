import * as firebase from "firebase";
import "firebase/auth";

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};
