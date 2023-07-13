import { initializeApp } from "firebase/app";
import { useEffect } from "react";

import {
  getFirestore,
  collection,
  setDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0FheaQZLjZpJ2u_7PUDZELIUWSGWk6S8",
  authDomain: "react-chat-app-7e7dc.firebaseapp.com",
  projectId: "react-chat-app-7e7dc",
  storageBucket: "react-chat-app-7e7dc.appspot.com",
  messagingSenderId: "168896265455",
  appId: "1:168896265455:web:0c2dcb8c9a861350146f1a",
};

const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
const db = getFirestore(app);
export default db






















