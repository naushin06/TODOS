import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbK_NKTSjV75hdbp03GjP4x2hsyzr_hGw",
  authDomain: "tdlprojec.firebaseapp.com",
  projectId: "tdlprojec",
  storageBucket: "tdlprojec.appspot.com",
  messagingSenderId: "145733847387",
  appId: "1:145733847387:web:3edf33668cc16d28a0b27e",
  measurementId: "G-JMYG3LJNNW"
};

  firebase.initializeApp(firebaseConfig);

  export const db= firebase.firestore();

  console.log(db);
