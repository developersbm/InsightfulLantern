// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { // Everything removed for security. Project is hosted in external server
 apiKey: "1",
 authDomain: "1",
 projectId: "1",
 storageBucket: "1",
 messagingSenderId: "13",
 appId: "1",
};
if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
