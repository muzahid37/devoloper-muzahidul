// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXSOuHI7iLwsUcl4QRNKPf-Xwhxkaw9Y",
  authDomain: "developer-muzahidul.firebaseapp.com",
  projectId: "developer-muzahidul",
  storageBucket: "developer-muzahidul.appspot.com",
  messagingSenderId: "25007223016",
  appId: "1:25007223016:web:020a9f9adbab51436d195d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;