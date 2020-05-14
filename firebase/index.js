import * as firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAE6u-DcHoCfuUrmE1rLPieCTWjAvcluXs",
  authDomain: "react-native-firebase-b56e1.firebaseapp.com",
  databaseURL: "https://react-native-firebase-b56e1.firebaseio.com",
  projectId: "react-native-firebase-b56e1",
  storageBucket: "react-native-firebase-b56e1.appspot.com",
  messagingSenderId: "243651258932",
  appId: "1:243651258932:web:5fab209c0184c6d284b861",
  measurementId: "G-ZRKLEYKSXH",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export function storeTodoNote(todo) {
  const timestamp = new Date();
  const uuid = uuidv4();
  db.collection("Todos")
    .doc(uuid)
    .set({
      ...todo,
      timestamp: timestamp.toISOString(),
    })
    .then((data) => {
      console.log("data written", data);
    })
    .catch((e) => {
      console.log("error", e);
    });
}

export function getTodos(show) {
  const todoscollection = db.collection("Todos");
  todoscollection.onSnapshot((a) => {
    let data = a.docs.map((QuerySnapshot) => {
      return QuerySnapshot.data();
    });
    show(data);
    // let data = a.docs.map((b) => b.data());
  });
}
