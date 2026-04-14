// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqXfDvb7dsKOqx-uqWG0KjbBIiCqbHxFQ",
  authDomain: "demoproject-66716.firebaseapp.com",
  projectId: "demoproject-66716",
  storageBucket: "demoproject-66716.firebasestorage.app",
  messagingSenderId: "131370624607",
  appId: "1:131370624607:web:580f2bbf9ee65b4064ddea",
  measurementId: "G-9H5WENMC97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}