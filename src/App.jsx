import { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

import './App.css'
import List from './components/organism/lists/List'
const provider = new GoogleAuthProvider()

const firebaseConfig = {
    apiKey: "AIzaSyA-gCWTFKokUBv9q5bEpOVJQP-KL0PUjJw",
    authDomain: "gigger-app-61e9c.firebaseapp.com",
    projectId: "gigger-app-61e9c",
    storageBucket: "gigger-app-61e9c.appspot.com",
    messagingSenderId: "297785545322",
    appId: "1:297785545322:web:8596139267454fead6b013",
    measurementId: "G-P3RK4QXPJ7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();


auth.languageCode = 'es';
const login = signInWithPopup(auth, provider)
    .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        
        
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
});


function App() {



 // Hacer luego esto uwu

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <List />
    </div>
  )
}

export default App
