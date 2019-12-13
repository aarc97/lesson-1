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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
