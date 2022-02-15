import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAqQs7he81sZ7h_VoTa_vUNx3a0Kxu48Qc",
    authDomain: "livechat-b9b54.firebaseapp.com",
    projectId: "livechat-b9b54",
    storageBucket: "livechat-b9b54.appspot.com",
    messagingSenderId: "573499827842",
    appId: "1:573499827842:web:dcd38f8e2159f1b692769b",
    measurementId: "G-1BYKX0FJ44"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)