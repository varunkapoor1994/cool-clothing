import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDXIhkjbavqXZB9IyHk44LGg770zNzX694",
  authDomain: "cool-clothing-db-43c14.firebaseapp.com",
  databaseURL: "https://cool-clothing-db-43c14.firebaseio.com",
  projectId: "cool-clothing-db-43c14",
  storageBucket: "cool-clothing-db-43c14.appspot.com",
  messagingSenderId: "290847954128",
  appId: "1:290847954128:web:50b1adf7442e73a6f7bad5",
  measurementId: "G-GTNVT3GLDD",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
