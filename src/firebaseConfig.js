// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import other Firebase modules here if needed, for example:
// import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMsFaV0uqeQ0FJ4TmL4nLFffR7wHE4GgU",
  authDomain: "myreactinit.firebaseapp.com",
  projectId: "myreactinit",
  storageBucket: "myreactinit.appspot.com",
  messagingSenderId: "621085185105",
  appId: "1:621085185105:web:8f1da678a39c810deb9470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app (optional, based on your needs)
export default app;
