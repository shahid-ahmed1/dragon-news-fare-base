// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1dmueEnYRQN6JcQpOkr0ycZwdCJCTRoA",
  authDomain: "dragon-news-1c247.firebaseapp.com",
  projectId: "dragon-news-1c247",
  storageBucket: "dragon-news-1c247.firebasestorage.app",
  messagingSenderId: "397249588944",
  appId: "1:397249588944:web:f7f1c718efdb6791c878d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth