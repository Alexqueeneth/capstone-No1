// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuCr_w8SKgEKJJ3nQ-Yr7d0x-cWV9V6lE",
  authDomain: "capstone-no1.firebaseapp.com",
  projectId: "capstone-no1",
  storageBucket: "capstone-no1.firebasestorage.app",
  messagingSenderId: "589375231938",
  appId: "1:589375231938:web:f74a5348027a1f86a4285b",
  measurementId: "G-QXCG63SPYV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, app, auth, googleProvider };
