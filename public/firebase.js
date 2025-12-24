// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCV9dkYx3o9hIFshwgjNTpQXKvbcNPvSDw",
    authDomain: "arcetworld.firebaseapp.com",
    projectId: "arcetworld",
    storageBucket: "arcetworld.firebasestorage.app",
    messagingSenderId: "285333760248",
    appId: "1:285333760248:web:9b2794fa7523dc70dbf30d",
    measurementId: "G-GMQ2X3ZSHM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

