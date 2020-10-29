import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAlFYrMvR3316N-ouWu4O1nMryh90cYhS0",
  authDomain: "crown-db-ee689.firebaseapp.com",
  databaseURL: "https://crown-db-ee689.firebaseio.com",
  projectId: "crown-db-ee689",
  storageBucket: "crown-db-ee689.appspot.com",
  messagingSenderId: "303682999808",
  appId: "1:303682999808:web:bb888725dd5b011181eae5",
  measurementId: "G-PCRGWLJJY6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;