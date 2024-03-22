import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKad-evgL5f15oN2c-CIrguQJtbuRADqs",
  authDomain: "app-narracao-de-historias.firebaseapp.com",
  databaseURL: "https://app-narracao-de-historias-default-rtdb.firebaseio.com",
  projectId: "app-narracao-de-historias",
  storageBucket: "app-narracao-de-historias.appspot.com",
  messagingSenderId: "295271550300",
  appId: "1:295271550300:web:98ddeb1c03e749f1ac8599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Realtime Database
export const db = getDatabase(app);
