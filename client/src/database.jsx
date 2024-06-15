// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "@firebase/firestore";

export const StartFirebase = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSWeDvjBbSpeDk3qSA7WQT66BIYi-iV0w",
    authDomain: "reactjs-auth-dashboard.firebaseapp.com",
    databaseURL: "https://reactjs-auth-dashboard-default-rtdb.firebaseio.com",
    projectId: "reactjs-auth-dashboard",
    storageBucket: "reactjs-auth-dashboard.appspot.com",
    messagingSenderId: "997364730727",
    appId: "1:997364730727:web:964e8b9bd68bd858febdc2",
    measurementId: "G-R0MNWD3Y4S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;