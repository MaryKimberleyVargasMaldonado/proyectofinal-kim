import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCHwGtICTsRUYBPNFDvt0lsXMR_evqcCmI",
	authDomain: "cripto-app-d456a.firebaseapp.com",
	projectId: "cripto-app-d456a",
	storageBucket: "cripto-app-d456a.appspot.com",
	messagingSenderId: "489815180180",
	appId: "1:489815180180:web:2c42b34b8c0d7a56acc581",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Base de datos
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
