import firebase from 'firebase/app'; 
import 'firebase/firestore'; 

const config = {
    apiKey: "AIzaSyCLYuKx_Gnb92BolN6cWGl8yhcrzyDYDBQ",
    authDomain: "dan-maira-wedding.firebaseapp.com",
    databaseURL: "https://dan-maira-wedding.firebaseio.com",
    projectId: "dan-maira-wedding",
    storageBucket: "dan-maira-wedding.appspot.com",
    messagingSenderId: "599413718015",
    appId: "1:599413718015:web:0c626065526652d164c5ca",
    measurementId: "G-JGR52G4BVJ"
};

firebase.initializeApp(config)

export const firestore = firebase.firestore();

export default firebase; 