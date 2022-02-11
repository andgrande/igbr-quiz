import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAS3KRtPxdIRzlMCdgQOf9QbNgqiP92nXg",
  authDomain: "igbr-quiz.firebaseapp.com",
  projectId: "igbr-quiz",
  storageBucket: "igbr-quiz.appspot.com",
  messagingSenderId: "782507746978",
  appId: "1:782507746978:web:d4bb04649ec8d2182899fb"
};

const app = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(app);

export default FirebaseAuth;