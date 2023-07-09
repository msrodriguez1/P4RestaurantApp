// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUQFkPEwEfxGvMv1BMqdaeOBrrw78iHpU",
  authDomain: "prueba24062023.firebaseapp.com",
  projectId: "prueba24062023",
  storageBucket: "prueba24062023.appspot.com",
  messagingSenderId: "119988469441",
  appId: "1:119988469441:web:7bea3ccf41dcdaf16d5e40",
  measurementId: "G-KERPV9S65X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firesote(a);
const analytics = getAnalytics(app);