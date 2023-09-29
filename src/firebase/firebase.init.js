// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtbzQ8Abq05vdqeh31RveNXfM152nNPBU",
  authDomain: "simple-firebase-49e77.firebaseapp.com",
  projectId: "simple-firebase-49e77",
  storageBucket: "simple-firebase-49e77.appspot.com",
  messagingSenderId: "412494881295",
  appId: "1:412494881295:web:ac4b64dfe93443a1fd797a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app