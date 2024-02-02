// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-14df2.firebaseapp.com",
  projectId: "blogs-14df2",
  storageBucket: "blogs-14df2.appspot.com",
  messagingSenderId: "753588729134",
  appId: "1:753588729134:web:98e2531318374b3f19b6bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);