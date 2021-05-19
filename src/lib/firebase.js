import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7a9FKjomYnVia89PWTg4UAFymVtGegqA",
    authDomain: "reddit-clone-e2912.firebaseapp.com",
    projectId: "reddit-clone-e2912",
    storageBucket: "reddit-clone-e2912.appspot.com",
    messagingSenderId: "193877122309",
    appId: "1:193877122309:web:026ef3847d5c7c7b3eab6c",
    measurementId: "G-8XN25VZSWB"
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;
