// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGnAouzyHnVbO_zK_dOGF625L3KH6s7QI",
  authDomain: "miniblog-4f847.firebaseapp.com",
  projectId: "miniblog-4f847",
  storageBucket: "miniblog-4f847.appspot.com",
  messagingSenderId: "584566896565",
  appId: "1:584566896565:web:ab14cebc6b5a59be228bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
