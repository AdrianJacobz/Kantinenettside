// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4KJBDt-y6oSnH9y5tRbXC87oZ83bymtw",
  authDomain: "kantine-nettside-8d967.firebaseapp.com",
  projectId: "kantine-nettside-8d967",
  storageBucket: "kantine-nettside-8d967.firebasestorage.app",
  messagingSenderId: "699560397170",
  appId: "1:699560397170:web:40a8a197141ed29a9735eb",
  measurementId: "G-Y0B89MQ4FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();