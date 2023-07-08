//firebase利用の雛形記述
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //firebase利用のため initializeAppインポート
import { getAnalytics } from "firebase/analytics"; //analitycs利用のためインポート(※今回利用してない)
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //Google認証機能 を利用のためインポート
import { getFirestore } from "firebase/firestore"; //Firestore を利用のためインポート


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
const app = initializeApp(firebaseConfig); //firebase利用で必要不可欠  変数に代入
const analytics = getAnalytics(app); //analytics利用 変数に代入
const auth = getAuth(app); //認証利用 変数に代入
const provider = new GoogleAuthProvider(); //認証利用 変数に代入
const db = getFirestore(app); //firestore利用 変数に代入

export { auth, provider, db };