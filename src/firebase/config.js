// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwHM_UrbYumyJeQgJeOuh64zwac86Ek0Y",
    authDomain: "react-journalapp-3c2e7.firebaseapp.com",
    projectId: "react-journalapp-3c2e7",
    storageBucket: "react-journalapp-3c2e7.appspot.com",
    messagingSenderId: "850581710490",
    appId: "1:850581710490:web:d0c6613f6a812fe7ac2123"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseCloudFirestore = getFirestore(FirebaseApp);