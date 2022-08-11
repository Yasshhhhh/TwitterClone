import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtPOx-LpnR4c1vLMjugjCv12HwOgQz_Yo",
  authDomain: "twitter-clone-a02fc.firebaseapp.com",
  projectId: "twitter-clone-a02fc",
  storageBucket: "twitter-clone-a02fc.appspot.com",
  messagingSenderId: "535743491338",
  appId: "1:535743491338:web:8daa95df9d461d5ff9def3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db =app.firestore();
export default db;