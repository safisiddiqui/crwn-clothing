import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyD8QObwpV-6_lHZXKlY-VyQROpJWecGQWg",
        authDomain: "crwn-db-2f32b.firebaseapp.com",
        projectId: "crwn-db-2f32b",
        storageBucket: "crwn-db-2f32b.appspot.com",
        messagingSenderId: "324884219207",
        appId: "1:324884219207:web:50dc5865d42d42a3c67862",
        measurementId: "G-3L6RN4T3Z1"
      };


      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;