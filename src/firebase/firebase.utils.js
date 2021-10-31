import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    
        apiKey: "AIzaSyD8QObwpV-6_lHZXKlY-VyQROpJWecGQWg",
        authDomain: "crwn-db-2f32b.firebaseapp.com",
        projectId: "crwn-db-2f32b",
        storageBucket: "crwn-db-2f32b.appspot.com",
        messagingSenderId: "324884219207",
        appId: "1:324884219207:web:50dc5865d42d42a3c67862",
        measurementId: "G-3L6RN4T3Z1"
      };

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
           const {displayName, email} = userAuth;
           const createdAt = new Date();

        try {
        await userRef.set({
            displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message )
    }
  }
     return userRef;
   };


      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;