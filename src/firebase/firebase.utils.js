import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8NWhMjtmmLFlsUL60TGovEwDRCc-XZgo",
  authDomain: "crwn-db-c6c05.firebaseapp.com",
  databaseURL: "https://crwn-db-c6c05.firebaseio.com",
  projectId: "crwn-db-c6c05",
  storageBucket: "crwn-db-c6c05.appspot.com",
  messagingSenderId: "905790852238",
  appId: "1:905790852238:web:588e3443378a455597cddf",
  measurementId: "G-L5GWTLE80J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
