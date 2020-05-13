import * as firebase from 'firebase';
import 'firebase/firestore'

//  Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyANmQmiqLM7-1G9I2S0QgydjYBpVlXqNXQ",
    authDomain: "squashtask.firebaseapp.com",
    databaseURL: "https://squashtask.firebaseio.com",
    projectId: "squashtask",
    storageBucket: "squashtask.appspot.com",
    messagingSenderId: "373356731372",
    appId: "1:373356731372:web:d8050546b1fcb74623bec9",
    measurementId: "G-JCQJ3YZDYJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;