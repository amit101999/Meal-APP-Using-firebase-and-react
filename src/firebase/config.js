// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANmztAu2O3Zvy1WqjNGJo2l9S514sXc5k",
    authDomain: "meal-app-9bfa8.firebaseapp.com",
    projectId: "meal-app-9bfa8",
    storageBucket: "meal-app-9bfa8.appspot.com",
    messagingSenderId: "779696108978",
    appId: "1:779696108978:web:1938f074e77a20e1a4e0ab",
    measurementId: "G-4MFB9X62RF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);