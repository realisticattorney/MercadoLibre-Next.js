import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAROdjA8eyOKMN1ca2VIH6WvpBOmHRro0E',
  authDomain: 'next-b85ad.firebaseapp.com',
  projectId: 'next-b85ad',
  storageBucket: 'next-b85ad.appspot.com',
  messagingSenderId: '255264900510',
  appId: '1:255264900510:web:6f07fd67df9407b79fc28f',
};

// Initialize Firebase in the front end
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
