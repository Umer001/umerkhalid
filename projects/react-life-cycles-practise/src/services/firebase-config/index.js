// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcyrzjHOkV8xPqNHL9x1WHaz9wDw5bJ7U",
  authDomain: "bootcamp-24414.firebaseapp.com",
  projectId: "bootcamp-24414",
  storageBucket: "bootcamp-24414.appspot.com",
  messagingSenderId: "555424202011",
  appId: "1:555424202011:web:327cc911d668637f7be7be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
};
