// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZB856v6t8Mp3dCBw_mlnWHLLAkb4Yf14",
    authDomain: "fir-login-693bd.firebaseapp.com",
    projectId: "fir-login-693bd",
    storageBucket: "fir-login-693bd.firebasestorage.app",
    messagingSenderId: "589949402522",
    appId: "1:589949402522:web:ff8b444fb5520d6dfb0e23"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };