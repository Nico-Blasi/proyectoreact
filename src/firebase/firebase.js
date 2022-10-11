import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/FireBase";

const firebaseConfig = {
  apiKey: "AIzaSyBVI8QEzM-vFgzZvQa6dYcRG8GlkxcY__Y",
  authDomain: "ecomerce-proyect.firebaseapp.com",
  projectId: "ecomerce-proyect",
  storageBucket: "ecomerce-proyect.appspot.com",
  messagingSenderId: "509689750332",
  appId: "1:509689750332:web:193b9c188070420c19f439"
};

const app = initializeApp(firebaseConfig);