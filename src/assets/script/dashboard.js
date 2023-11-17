document.getElementById("signOutButton").addEventListener("click", logoutfunc);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuNouLpDM-yluSDCzzYn-XKJZgQglMpGA",
  authDomain: "fanfantv-c7537.firebaseapp.com",
  projectId: "fanfantv-c7537",
  storageBucket: "fanfantv-c7537.appspot.com",
  messagingSenderId: "3889383774",
  appId: "1:3889383774:web:7e9c4e28821eff351067cf",
  measurementId: "G-Y2NF0C4DQE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("Logged in.");
    document.getElementById("profilename").innerHTML = user.email;
  } else {
    console.log("Not Logged in.");
    window.location.replace("../login");
  }
});

function logoutfunc() {
  signOut(auth)
    .then(() => {
      console.log("Logged out.");
      window.location.replace("../login");
    })
    .catch((error) => {
      console.log("An error accured.");
    });
}
