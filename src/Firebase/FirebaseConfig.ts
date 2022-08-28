import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLIWPGOSENSwDQiAESLiVyJKbXb3gxoUY",
    authDomain: "bookcaar-a09c6.firebaseapp.com",
    projectId: "bookcaar-a09c6",
    storageBucket: "bookcaar-a09c6.appspot.com",
    messagingSenderId: "28825544759",
    appId: "1:28825544759:web:50bf2da1ab1d9ac991b7b2",
    measurementId: "G-XKFKX7ZWCP"
  };

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);