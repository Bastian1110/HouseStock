import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNX4vBH-ISKx3544B-xiLzN1Wt-4DKww",
  authDomain: "housestock-cec9b.firebaseapp.com",
  projectId: "housestock-cec9b",
  storageBucket: "housestock-cec9b.appspot.com",
  messagingSenderId: "399042199966",
  appId: "1:399042199966:web:d6d6c38674067658f9d68f",
  measurementId: "G-9CK6LJ7MK2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }