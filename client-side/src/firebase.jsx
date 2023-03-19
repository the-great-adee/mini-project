// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-LB9OYVTorzSgQeznhJx4nVvaVoAqN60",
  authDomain: "react-auth-759f5.firebaseapp.com",
  projectId: "react-auth-759f5",
  storageBucket: "react-auth-759f5.appspot.com",
  messagingSenderId: "439267961534",
  appId: "1:439267961534:web:f1d37a55179f1ed1e4ccef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);