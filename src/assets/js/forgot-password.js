import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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

const userEmail = document.getElementById("currentEmail");
const resetPasswordButton = document.getElementById("submitButton");
const emailSent = document.getElementById("emailSent");

function sendResetEmail(event) {
  event.preventDefault();

  const emailAddress = userEmail.value;

  sendPasswordResetEmail(auth, emailAddress)
    .then(() => {
      emailSent.innerHTML = "이메일 전송이 완료되었습니다.<br>이메일이 오지 않는다면, 스팸 메일함을 확인해주세요.";
    })
    .catch((error) => {
      const errorCode = error.code;

      if (errorCode === "auth/invalid-email") {
        emailSent.innerHTML = "올바른 이메일을 입력해주세요.";
      } else if (errorCode === "auth/user-not-found") {
        emailSent.innerHTML = "입력하신 이메일과 연결된 사용자 계정을 찾지 못하였습니다.";
      }
    });
}

resetPasswordButton.addEventListener("click", sendResetEmail);
