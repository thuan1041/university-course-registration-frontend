// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE4nZR0Z3kXiXUYs6mu_migfk10TH2Omk",
  authDomain: "zalofakeauth124.firebaseapp.com",
  projectId: "zalofakeauth124",
  storageBucket: "zalofakeauth124.appspot.com",
  messagingSenderId: "409199550879",
  appId: "1:409199550879:web:be0cbe47b64e1036721daa",
  measurementId: "G-L8H9DRD7S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);