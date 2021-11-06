import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA390RrCYEsmbGKwWLXBVQVZndprADn5Pk",
  authDomain: "markeplace-mitienda.firebaseapp.com",
  projectId: "markeplace-mitienda",
  storageBucket: "markeplace-mitienda.appspot.com",
  messagingSenderId: "148261173602",
  appId: "1:148261173602:web:c5c3792b044a549f03943b"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const db = getFirestore() 
export {google, facebook, app, db}
