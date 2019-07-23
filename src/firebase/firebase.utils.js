import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbTry9cglFhTxqr3F_-BzUC3rQdLrIcDw",
    authDomain: "crwn-db-504ab.firebaseapp.com",
    databaseURL: "https://crwn-db-504ab.firebaseio.com",
    projectId: "crwn-db-504ab",
    storageBucket: "",
    messagingSenderId: "814464363733",
    appId: "1:814464363733:web:b3438c0afea2e5d4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;