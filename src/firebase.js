import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAs700PnL75GxGKG9O1rhF68Kam7Dzcoms",
  authDomain: "crypto-2fa18.firebaseapp.com",
  projectId: "crypto-2fa18",
  storageBucket: "crypto-2fa18.appspot.com",
  messagingSenderId: "976077485792",
  appId: "1:976077485792:web:991de7f0970e0cca7c0285"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
