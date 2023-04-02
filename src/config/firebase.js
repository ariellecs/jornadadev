import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDKfw6B-eizqIYo6u8qDyyw_s0_FHJv6TM",
  authDomain: "tiktari---jornadadev.firebaseapp.com",
  projectId: "tiktari---jornadadev",
  storageBucket: "tiktari---jornadadev.appspot.com",
  messagingSenderId: "539794863193",
  appId: "1:539794863193:web:e34c8d44312d60e69c2d48",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
