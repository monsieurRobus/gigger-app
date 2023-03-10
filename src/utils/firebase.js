import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"



const firebaseConfig = {

    apiKey: "AIzaSyA-gCWTFKokUBv9q5bEpOVJQP-KL0PUjJw",
    authDomain: "gigger-app-61e9c.firebaseapp.com",
    databaseURL: "https://gigger-app-61e9c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gigger-app-61e9c",
    storageBucket: "gigger-app-61e9c.appspot.com",
    messagingSenderId: "297785545322",
    appId: "1:297785545322:web:8596139267454fead6b013",
    measurementId: "G-P3RK4QXPJ7"

};

export const app = initializeApp(firebaseConfig);

// const login = signInWithPopup(auth, provider)
//     .then((result) => {
        
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
        
//         const user = result.user;
        
        
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
// });Z