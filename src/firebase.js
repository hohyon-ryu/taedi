// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Yp9hFe_StZJ5--wqmxfCGyOb_JhrhQw",
  authDomain: "taedi-b35bc.firebaseapp.com",
  projectId: "taedi-b35bc",
  storageBucket: "taedi-b35bc.firebasestorage.app",
  messagingSenderId: "51824051261",
  appId: "1:51824051261:web:49397ed28b8ef816565654",
  measurementId: "G-ECMB8TKCY7",
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
