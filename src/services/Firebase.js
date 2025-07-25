import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJlxPPoEi2GLlqfYjpb8r_25tYMlSrsvY",
  authDomain: "fir-c85ac.firebaseapp.com",
  projectId: "fir-c85ac",
  storageBucket: "fir-c85ac.appspot.com",
  messagingSenderId: "352867867834",
  appId: "1:352867867834:web:5cb9c3b7b92c94c5b27683",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;
