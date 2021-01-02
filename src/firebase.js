import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQYmxxwtiTKvvLrLw8fEpBRs9P2JvYwZ8",
  authDomain: "teamr-f9b48.firebaseapp.com",
  projectId: "teamr-f9b48",
  storageBucket: "teamr-f9b48.appspot.com",
  messagingSenderId: "360005532451",
  appId: "1:360005532451:web:d856df3aee2ab6f8982a96",
  measurementId: "G-SETKG12V4M"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
