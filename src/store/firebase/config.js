import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'
var firebaseConfig = {
  apiKey: "AIzaSyBPHhcdpCMYnJvF13WlvyxEa3H8v9Md434",
  authDomain: "onlinestore-d780a.firebaseapp.com",
  databaseURL: "https://onlinestore-d780a.firebaseio.com",
  projectId: "onlinestore-d780a",
  storageBucket: "onlinestore-d780a.appspot.com",
  messagingSenderId: "689378005627",
  appId: "1:689378005627:web:3eeb2d710837dab8f008de"
};
// Initialize Firebase
 firebase.initializeApp( firebaseConfig );

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { auth, db, storage, timestamp}
      