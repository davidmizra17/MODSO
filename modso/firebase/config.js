// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAZkFZM8b1yuXKYmYofF2u1V92EVJWzb0A",
  authDomain: "modso-53bb8.firebaseapp.com",
  databaseURL: "https://modso-53bb8-default-rtdb.firebaseio.com",
  projectId: "modso-53bb8",
  storageBucket: "modso-53bb8.appspot.com",
  messagingSenderId: "367686884079",
  appId: "1:367686884079:web:862ef2b8de4e99bbf1991a",
  measurementId: "G-MT6ET1FY60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);