// firebase-configs.js

// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAh-m6Jj5kuP72rPMGX11W5akOjH6A0h4",
  authDomain: "mywebsite-51f44.firebaseapp.com",
  projectId: "mywebsite-51f44",
  storageBucket: "mywebsite-51f44.appspot.com",
  messagingSenderId: "470416155004",
  appId: "1:470416155004:web:de6e35796b6bddf57704f9",
  measurementId: "G-2CE3LSKWB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
