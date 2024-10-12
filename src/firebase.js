// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrh8Lah8mjZD59DupuAPMIcxJAK3ayJNc",
  authDomain: "peersilk.firebaseapp.com",
  projectId: "peersilk",
  storageBucket: "peersilk.appspot.com",
  messagingSenderId: "495828805609",
  appId: "1:495828805609:web:88f609c029e66697cd8d78",
  measurementId: "G-Q71BRJFWWX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
