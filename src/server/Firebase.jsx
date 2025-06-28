// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6k0T3EA-Yv3o-DhvBnQY9Gb8Xd_3_Cwc",
  authDomain: "studentportal-94c52.firebaseapp.com",
  projectId: "studentportal-94c52",
  storageBucket: "studentportal-94c52.firebasestorage.app",
  messagingSenderId: "837113930713",
  appId: "1:837113930713:web:2e7115c02c13e11279efc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
export {firestore};