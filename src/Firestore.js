import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD90N9XN08JMegxLYUWT6S8c2nB7ZHrj5k",

  authDomain: "task-app-262c0.firebaseapp.com",

  projectId: "task-app-262c0",

  storageBucket: "task-app-262c0.appspot.com",

  messagingSenderId: "730911369715",

  appId: "1:730911369715:web:13b44816629a9b79d20a86",
});

export const db = app.firestore();
