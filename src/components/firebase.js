// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzYCJdCIZlCrfkyG--gKs_P5qHgefKh0",
  authDomain: "ecomproj-12ced.firebaseapp.com",
  projectId: "ecomproj-12ced",
  storageBucket: "ecomproj-12ced.appspot.com",
  messagingSenderId: "743601333114",
  appId: "1:743601333114:web:7f33779fa6c543c664ecc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
