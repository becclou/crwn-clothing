import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4__2ofelfH-EP7w98s-q5KUoWef0Qnr8",
    authDomain: "crwn-db-ae314.firebaseapp.com",
    projectId: "crwn-db-ae314",
    storageBucket: "crwn-db-ae314.appspot.com",
    messagingSenderId: "1027156183683",
    appId: "1:1027156183683:web:05c4638accc6d1c39e69b6",
    measurementId: "G-Q2VZHS7GSF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc('users/128fdashadu');

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  };

  return userRef;

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;