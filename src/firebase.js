// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHna2jInHfDXoVC8vgDNodsdvrezxDb6s",
  authDomain: "postagram-66d2a.firebaseapp.com",
  projectId: "postagram-66d2a",
  storageBucket: "postagram-66d2a.appspot.com",
  messagingSenderId: "32793169164",
  appId: "1:32793169164:web:0a7d54203a9864d5d78d29",
  measurementId: "G-1GHJMTCZB3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };