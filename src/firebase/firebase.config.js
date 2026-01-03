// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs8zdHTFy9fEr1zMtbBny5Uc_aFOVT4tQ",
  authDomain: "game-hub-b7e14.firebaseapp.com",
  projectId: "game-hub-b7e14",
  storageBucket: "game-hub-b7e14.firebasestorage.app",
  messagingSenderId: "703057693954",
  appId: "1:703057693954:web:202e2d27358b9fa0f4061b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);