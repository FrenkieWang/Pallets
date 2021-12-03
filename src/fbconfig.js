import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDiRlbeNka-3YmCvHH_jw5HiKQJEMMrwo",
  authDomain: "palletnoauthentication.firebaseapp.com",
  projectId: "palletnoauthentication",
  storageBucket: "palletnoauthentication.appspot.com",
  messagingSenderId: "201766494770",
  appId: "1:201766494770:web:da858cff0e1bf5b99c522b",
  measurementId: "G-YB079BFR4E"
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

const db = getFirestore(firebaseApp, {});
export { db };
