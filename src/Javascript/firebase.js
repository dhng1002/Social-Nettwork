// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs-9pnI8wFGTfQ2BXatG873OZejBPzdrw",
  authDomain: "social-network-1f011.firebaseapp.com",
  databaseURL: "https://social-network-1f011-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "social-network-1f011",
  storageBucket: "social-network-1f011.appspot.com",
  messagingSenderId: "805489605509",
  appId: "1:805489605509:web:eb51b56fa4a775a8e6a2ec",
  measurementId: "G-LD3GC4RTHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()