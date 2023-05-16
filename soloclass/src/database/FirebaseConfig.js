import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9L2NMJLzY2_ElNLA8P2o8FywM2Re7WTA",
  authDomain: "soloclass-f038d.firebaseapp.com",
  projectId: "soloclass-f038d",
  storageBucket: "soloclass-f038d.appspot.com",
  messagingSenderId: "471770393638",
  appId: "1:471770393638:web:d8c909cd602b7b57ed0ae7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;