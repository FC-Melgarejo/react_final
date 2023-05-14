import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGiO3t1Mi4nsGuox_7Zjdi4raRLr35qLE",
  authDomain: "my-app-b5dd9.firebaseapp.com",
  projectId: "my-app-b5dd9",
  storageBucket: "my-app-b5dd9.appspot.com",
  messagingSenderId: "214734411268",
  appId: "1:214734411268:web:68fedbeb3d2da74afb4751",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
