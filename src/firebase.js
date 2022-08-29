// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkBkc4-tYi52B9Y4HU9JQ0bixY7-b28bQ",
  authDomain: "recipe-finder-5f0aa.firebaseapp.com",
  databaseURL: "https://recipe-finder-5f0aa-default-rtdb.firebaseio.com",
  projectId: "recipe-finder-5f0aa",
  storageBucket: "recipe-finder-5f0aa.appspot.com",
  messagingSenderId: "211665410735",
  appId: "1:211665410735:web:b597cf786acc9395b5925a",
  measurementId: "G-V8Y4CFERW0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const resultsRef = databaseRef.child("Recipe-finder ");
export default firebase;