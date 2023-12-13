// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCM_VxiwnwmqAxWxLDRY4StZK0nDphgp84",
    authDomain: "sahyog-1f3e5.firebaseapp.com",
    projectId: "sahyog-1f3e5",
    storageBucket: "sahyog-1f3e5.appspot.com",
    messagingSenderId: "910744972725",
    appId: "1:910744972725:web:5401e2074ad73957c6fdfc",
    measurementId: "G-XNVQLQ6JKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);