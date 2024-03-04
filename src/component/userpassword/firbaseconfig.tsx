import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGGPaSXFkb36ZsXfBpFU2MfbDcmSaVLo4",
  authDomain: "username-passwordlogin.firebaseapp.com",
  projectId: "username-passwordlogin",
  storageBucket: "username-passwordlogin.appspot.com",
  messagingSenderId: "503752944262",
  appId: "1:503752944262:web:5e5154e6cf36377f327f07",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
