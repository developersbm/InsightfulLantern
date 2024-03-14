// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAVd0i_JT7fKWY3wk-6ToRjZVvAwwtrR6w",
 authDomain: "uci-hack-2024.firebaseapp.com",
 projectId: "uci-hack-2024",
 storageBucket: "uci-hack-2024.appspot.com",
 messagingSenderId: "27568726353",
 appId: "1:27568726353:web:e83be2800c5aff49487370",
};
if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
