import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwX_fumeF_PGH7Mr3PSBUd52HpcA3gJko",
  authDomain: "whatsapp-clone-norman.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-norman.firebaseio.com",
  projectId: "whatsapp-clone-norman",
  storageBucket: "whatsapp-clone-norman.appspot.com",
  messagingSenderId: "29093992532",
  appId: "1:29093992532:web:75b14c56f72552ff65b5c1",
  measurementId: "G-T82SWZGCEN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;