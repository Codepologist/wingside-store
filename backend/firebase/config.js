import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyACCetCh8pAykVUaMvI5HEAe3eGg_bIlpc",
  authDomain: "wingside-48c06.firebaseapp.com",
  projectId: "wingside-48c06",
  storageBucket: "wingside-48c06.appspot.com",
  messagingSenderId: "975249624671",
  appId: "1:975249624671:web:0e30ed127b3f3f3ce795ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
