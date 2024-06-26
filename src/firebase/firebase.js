// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgoWqPMyY9Q9Xjjopz81ln6hRn4FD5rE",
  authDomain: "passenger-booking-a7e39.firebaseapp.com",
  projectId: "passenger-booking-a7e39",
  storageBucket: "passenger-booking-a7e39.appspot.com",
  messagingSenderId: "548985147495",
  appId: "1:548985147495:web:b839f61e91ffd2a499c4c2",
  measurementId: "G-XEW24G9CW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential
};