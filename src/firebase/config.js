import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbrwx_2q5wL3X1vYdM2JFkEE4VrqBhYOo",
  authDomain: "bos-back.firebaseapp.com",
  projectId: "bos-back",
  storageBucket: "bos-back.appspot.com",
  messagingSenderId: "234901052732",
  appId: "1:234901052732:web:9af4812ea6db3e23011239",
};

// Inicializamos la APP
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}