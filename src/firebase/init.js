import firebase from "firebase/app";
import firestore from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAPA6pcH-9Zz3zMFzxDJoZ5AO9rN2VNPh0",
    authDomain: "revelio-chat.firebaseapp.com",
    databaseURL: "https://revelio-chat.firebaseio.com",
    projectId: "revelio-chat",
    storageBucket: "revelio-chat.appspot.com",
    messagingSenderId: "1076287232075",
    appId: "1:1076287232075:web:5c7fc11bde76f0939415ce",
    measurementId: "G-GEM9LLVHJ2"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebaseApp.firestore();
