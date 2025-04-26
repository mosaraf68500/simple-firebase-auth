// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8zpU1Mh5YxVkD_75caoGqT0bfTar5m0",
  authDomain: "simple-firebase-auth2-f0506.firebaseapp.com",
  projectId: "simple-firebase-auth2-f0506",
  storageBucket: "simple-firebase-auth2-f0506.firebasestorage.app",
  messagingSenderId: "711760938019",
  appId: "1:711760938019:web:6292e4e4d18e11ede09d96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);