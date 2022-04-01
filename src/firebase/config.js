import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAiskzDdbfrhGZwnWYQ1CDFDIcX5EaHJ3U",
    authDomain: "firegram-ecce9.firebaseapp.com",
    projectId: "firegram-ecce9",
    storageBucket: "firegram-ecce9.appspot.com",
    messagingSenderId: "140330989964",
    appId: "1:140330989964:web:d70f85501515f1caf7fea9"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
