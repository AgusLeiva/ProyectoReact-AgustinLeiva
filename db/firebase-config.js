
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBg3IOgSTIkVsljdCmmRdGEB59UdD1eJNs",
  authDomain: "e-commerce-730a0.firebaseapp.com",
  projectId: "e-commerce-730a0",
  storageBucket: "e-commerce-730a0.appspot.com",
  messagingSenderId: "647204489121",
  appId: "1:647204489121:web:ac33919b6b3970555a6de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;