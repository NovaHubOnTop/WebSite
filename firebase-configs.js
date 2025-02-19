// firebase-configs.js

// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

// Your web app's Firebase configuration (replace these with your Firebase details)
const firebaseConfig = {
  apiKey: "AIzaSyDAh-m6Jj5kuP72rPMGX11W5akOjH6A0h4",
  authDomain: "mywebsite-51f44.firebaseapp.com",
  projectId: "mywebsite-51f44",
  storageBucket: "mywebsite-51f44.firebasestorage.app",
  messagingSenderId: "470416155004",
  appId: "1:470416155004:web:de6e35796b6bddf57704f9",
  measurementId: "G-2CE3LSKWB1"
};

// Initialize Firebase with your config
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional, if you plan to use analytics)
const analytics = getAnalytics(app);
