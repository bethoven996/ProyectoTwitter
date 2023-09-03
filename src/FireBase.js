// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtWaLxlbfdyarZW5dOEX4tK4Q94YLHw_0",
  authDomain: "bird-28b81.firebaseapp.com",
  projectId: "bird-28b81",
  storageBucket: "bird-28b81.appspot.com",
  messagingSenderId: "805807606609",
  appId: "1:805807606609:web:daff9c4e81fa004e092170",
};

const app = initializeApp(firebaseConfig);
export const usuariosDatos = getAuth(app);
