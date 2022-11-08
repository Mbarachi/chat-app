import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBziBTvceyKcWQSA8tWU5VktPwk-cbTs9o",
  authDomain: "chat-ca7ff.firebaseapp.com",
  projectId: "chat-ca7ff",
  storageBucket: "chat-ca7ff.appspot.com",
  messagingSenderId: "879020877569",
  appId: "1:879020877569:web:a00be3d8376e4628931d00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()