// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBtqnXJO2F7sUbg2e0CjyZngF1Tyst7Xvs",
    authDomain: "renew-dc6b9.firebaseapp.com",
    projectId: "renew-dc6b9",
    storageBucket: "renew-dc6b9.appspot.com",
    messagingSenderId: "253113710083",
    appId: "1:253113710083:web:bcca75db7f2eaade468036"
};


const auth = getAuth(app);
const db = getFirestore();


const app = initializeApp(firebaseConfig);

export { auth, db }
export default app

