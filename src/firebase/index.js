import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPZaegt5fpg8Hj9cAv0FGg4RLxJd9WCFc",
  authDomain: "the-cloud-closet.firebaseapp.com",
  projectId: "the-cloud-closet",
  storageBucket: "the-cloud-closet.appspot.com",
  messagingSenderId: "849177485911",
  appId: "1:849177485911:web:cf96471858d863c0b5b912",
  measurementId: "G-YHGEG6107P"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {storage, firebase as default};