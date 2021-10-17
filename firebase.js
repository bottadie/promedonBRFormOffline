// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvR0uc-SXJsNDEkzg_L2c04S86ktMbzGs",
  authDomain: "dbofflinep.firebaseapp.com",
  databaseURL: "https://dbofflinep-default-rtdb.firebaseio.com",
  projectId: "dbofflinep",
  storageBucket: "dbofflinep.appspot.com",
  messagingSenderId: "825712782588",
  appId: "1:825712782588:web:241d88ba6c5f88171b7b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

window.addEventListener('load', () => {
    const database = getDatabase();
    console.log(database)
    
    })