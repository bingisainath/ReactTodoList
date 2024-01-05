import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB5-m1TXkT0aJEbVGDFJo2rzGBQ1cR4xG8",
  authDomain: "reacttodolist-cb439.firebaseapp.com",
  projectId: "reacttodolist-cb439",
  storageBucket: "reacttodolist-cb439.appspot.com",
  messagingSenderId: "366733981474",
  appId: "1:366733981474:web:dbdcc93176a7db21e3177b",
  measurementId: "G-PR0EJ7ZXRH",
};

export const { Timestamp } = firebase.firestore;

export default firebase.initializeApp(config).firestore();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB5-m1TXkT0aJEbVGDFJo2rzGBQ1cR4xG8",
//   authDomain: "reacttodolist-cb439.firebaseapp.com",
//   projectId: "reacttodolist-cb439",
//   storageBucket: "reacttodolist-cb439.appspot.com",
//   messagingSenderId: "366733981474",
//   appId: "1:366733981474:web:dbdcc93176a7db21e3177b",
//   measurementId: "G-PR0EJ7ZXRH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
