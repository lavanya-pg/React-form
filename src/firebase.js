import FormSuccess from "./FormSuccess";
// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
let firebaseApp;

  firebaseApp = initializeApp({
    apiKey: "AIzaSyBBc2AcHtNktEuoCwo4r4soj1DbT7JYVWQ",
    authDomain: "clone-project-24644.firebaseapp.com",
    projectId: "clone-project-24644",
    storageBucket: "clone-project-24644.appspot.com",
    messagingSenderId: "267942020675",
    appId: "1:267942020675:web:3464cc9805f20c5873f6f6",
    measurementId: "G-NB3NXDXNSX"
  });

 
const db = getFirestore();
export default db