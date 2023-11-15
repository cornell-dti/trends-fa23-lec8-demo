import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// insert own config file
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
