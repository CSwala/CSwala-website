import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCdeEAJwqGNbVDGlWS6R3a9OEW_RVf8BKs",
    authDomain: "cswala-g-signin.firebaseapp.com",
    projectId: "cswala-g-signin",
    storageBucket: "cswala-g-signin.appspot.com",
    messagingSenderId: "711679399560",
    appId: "1:711679399560:web:7cdfd64341d2bd2633b13d"
  
};

const app = initializeApp(firebaseConfig);
export const authentication  = getAuth(app);