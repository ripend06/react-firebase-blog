// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLXd6SQu4F-LFAqDOjld-GZKC82WSt-2U",
  authDomain: "react-firebase-blog-d61c8.firebaseapp.com",
  projectId: "react-firebase-blog-d61c8",
  storageBucket: "react-firebase-blog-d61c8.appspot.com",
  messagingSenderId: "263307100692",
  appId: "1:263307100692:web:d148df49c9ff88d67d1d01",
  measurementId: "G-QPJG1JPYPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };