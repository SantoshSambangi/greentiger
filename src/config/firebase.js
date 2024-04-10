// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro",
  authDomain: "gt-customer-ea6a4.firebaseapp.com",
  projectId: "gt-customer-ea6a4",
  storageBucket: "gt-customer-ea6a4.appspot.com",
  messagingSenderId: "131438495328",
  appId: "1:131438495328:web:a2794fd95bace9c75b6505",
  measurementId: "G-8XH6XCVW7P",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
