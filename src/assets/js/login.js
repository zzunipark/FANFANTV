import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function handleSubmit(event) {
  event.preventDefault();

  const agreeTermsCheckbox = document.getElementById("agreeTerms");
  const signInEmail = document.getElementById("signInEmail").value;
  const signInPassword = document.getElementById("signInPassword").value;
  const allErrorMessage = document.getElementById("allErrorMessage");

  if (!agreeTermsCheckbox.checked) {
    allErrorMessage.innerHTML = "오류: 로그인하려면 이용약관에 동의해야 합니다.";
    return;
  }

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(function (result) {
      var user = result.user;
      console.log("로그인된 사용자:", user);
      location.href = "./dashboard";
    })
    .catch(function (error) {
      var errorCode = error.code;

      allErrorMessage.innerHTML = "";

      if (errorCode === "auth/invalid-email") {
        emailError.innerHTML = "올바른 이메일을 입력해주세요.";
      } else if (errorCode === "auth/wrong-password") {
        passwordError.innerHTML = "올바른 암호를 입력해주세요.";
      } else if (errorCode === "auth/user-not-found") {
        emailError.innerHTML = "올바른 이메일을 입력해주세요.";
      } else if (errorCode === "auth/missing-password") {
        passwordError.innerHTML = "올바른 암호를 입력해주세요.";
      }

      setTimeout(() => {
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
      }, 2000);
    });
}

const submitButton = document.getElementById("signInButton");
submitButton.addEventListener("click", handleSubmit);

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.replace("./dashboard");
  } else {
    console.log("Not Logged In.");
  }
});
