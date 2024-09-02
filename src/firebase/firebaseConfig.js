import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailLink, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ACM Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_ACM_FIREBASE_API_KEY, 
    authDomain: process.env.REACT_APP_ACM_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_ACM_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_ACM_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_ACM_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ACM_FIREBASE_APP_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign in anonymously or via email link, lets the users log in for the first time basically and prevents bugs
signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Authentication error:", error);
  });

export { auth, db };