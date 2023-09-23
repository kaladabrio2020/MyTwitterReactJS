// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsK36wBqfEMUHPwQvxNFcl_f-3KhhiHs0",
  authDomain: "mytwitterreactjs.firebaseapp.com",
  projectId: "mytwitterreactjs",
  storageBucket: "mytwitterreactjs.appspot.com",
  messagingSenderId: "349676330020",
  appId: "1:349676330020:web:988a3ceb4d67f35baf8cb1",
  measurementId: "G-SKDE4NF9NX"
};

// Initialize Firebase
export const app      = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

