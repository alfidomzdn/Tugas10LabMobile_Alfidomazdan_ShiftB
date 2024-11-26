// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuuN6DxqZ3DdpcQdURgWvoAWpb8ZNzvXE",
  authDomain: "vue-firebase-c11e8.firebaseapp.com",
  projectId: "vue-firebase-c11e8",
  storageBucket: "vue-firebase-c11e8.appspot.com", // Perbaikan URL `firebasestorage.app` menjadi `appspot.com`
  messagingSenderId: "901278359932",
  appId: "1:901278359932:web:530140788a528875f584f9",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

// Exports
export { auth, googleProvider, db };
