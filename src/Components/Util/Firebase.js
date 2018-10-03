import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAPR0Fcd9NcdSUaO4Ia00lFaDM1jJMgV0",
    authDomain: "emailfaculdade-10cbf.firebaseapp.com",
    databaseURL: "https://emailfaculdade-10cbf.firebaseio.com",
    projectId: "emailfaculdade-10cbf",
    storageBucket: "emailfaculdade-10cbf.appspot.com",
    messagingSenderId: "739901678445"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();