import firebase from "@firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPYr9xg4X6LY6ozzxQZcqHpGNultiqQdk",
  authDomain: "revents-7c8d6.firebaseapp.com",
  databaseURL: "https://revents-7c8d6.firebaseio.com",
  projectId: "revents-7c8d6",
  storageBucket: "revents-7c8d6.appspot.com",
  messagingSenderId: "737150996058",
  appId: "1:737150996058:web:21da8079da9cba26"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
