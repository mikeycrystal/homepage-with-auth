import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1f0y71Ff-7VJlgBx_MUNTNVc2CZoXVAE",
  authDomain: "wride-interview-app.firebaseapp.com",
  projectId: "wride-interview-app",
  storageBucket: "wride-interview-app.appspot.com",
  messagingSenderId: "66637597328",
  appId: "1:66637597328:web:8fc52c9391a9c8c75b6615",
  measurementId: "G-2REEYB6VK5",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
