import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  browserSessionPersistence,
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
const agreeTermsCheckbox = document.getElementById("agreeterms");
const errorMessageDiv = document.getElementById("errorMessageDiv");

function handleSubmit(event) {
  event.preventDefault();

  const agreeTermsCheckbox = document.getElementById("agreeterms");
  const signInEmail = document.getElementById("signInEmail").value;
  const signInPassword = document.getElementById("signInPassword").value;
  const errorMessageParagraph = document.getElementById("errorMessageParagraph");

  if (!agreeTermsCheckbox.checked) {
    errorMessageParagraph.innerHTML = "오류: 로그인하려면 이용약관에 동의해야 합니다.";
    return;
  }

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(function (result) {
      var user = result.user;
      console.log("로그인된 사용자:", user);
      location.href = "../dashboard";
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === "auth/invalid-email") {
        errorMessageParagraph.innerHTML = "오류 : 이메일이 올바르지 않습니다.";
      } else if (errorCode === "auth/wrong-password") {
        errorMessageParagraph.innerHTML = "오류 : 암호가 올바르지 않습니다.";
      } else if (errorCode === "auth/user-not-found") {
        errorMessageParagraph.innerHTML = "오류 : 사용자 계정이 존재하지 않습니다.";
      } else if (errorCode === "auth/missing-password") {
        errorMessageParagraph.innerHTML = "오류 : 암호를 입력하지 않았습니다.";
      } else {
        errorMessageParagraph.innerHTML = "오류 : " + errorMessage;
      }
    });
}

const submitButton = document.getElementById("signInButton");
submitButton.addEventListener("click", handleSubmit);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    errorMessageParagraph.innerHTML = "로그인 된 사용자입니다.<br>잠시 후 자동으로 회원 전용 페이지로 이동합니다.";
    setTimeout(() => {
      window.location.replace("../dashboard");
    }, 2000);
  } else {
    console.log("Not Logged in.");
  }
});
