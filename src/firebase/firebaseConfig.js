import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDj39Hl8ir9Q3JCtWf-PmeJEYNZ3rHyv6w",
  authDomain: "mi-tienda-3381f.firebaseapp.com",
  projectId: "mi-tienda-3381f",
  storageBucket: "mi-tienda-3381f.appspot.com",
  messagingSenderId: "1057163203476",
  appId: "1:1057163203476:web:10fc6ff2e0e9b22f73b581"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()

export {google, app}