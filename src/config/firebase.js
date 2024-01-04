// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCroknZDnCFRU6bQSVX48xGyeQsp3WH3No",
  authDomain: "contact-manager-2db36.firebaseapp.com",
  projectId: "contact-manager-2db36",
  storageBucket: "contact-manager-2db36.appspot.com",
  messagingSenderId: "295760727393",
  appId: "1:295760727393:web:99c72a1f8e9caf147a8920",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
