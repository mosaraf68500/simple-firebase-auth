// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3V1Wx47BgKV5jLTt3YG4AFPvmXjE8OY",
  authDomain: "simple-firebase-auth-ea1a3.firebaseapp.com",
  projectId: "simple-firebase-auth-ea1a3",
  storageBucket: "simple-firebase-auth-ea1a3.firebasestorage.app",
  messagingSenderId: "807588689803",
  appId: "1:807588689803:web:bb416a8bbe97e88292a18e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);