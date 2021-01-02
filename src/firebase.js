import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADggQa8NeS5sI2ZgEIzPcEto3-VADyqBU",
  authDomain: "todo-app-cp-d5b59.firebaseapp.com",
  projectId: "todo-app-cp-d5b59",
  storageBucket: "todo-app-cp-d5b59.appspot.com",
  messagingSenderId: "745696049578",
  appId: "1:745696049578:web:5eda0bae8fab207ef2d3d3",
  measurementId: "G-SWC7L9WBF2",
});
const db = firebaseApp.firestore();

export default db;
