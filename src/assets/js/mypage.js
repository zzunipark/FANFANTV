import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, updatePassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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

const usernameBox = document.getElementById("usernameBox");

let currentPasswordInput = document.getElementById("currentPassword");
let newPasswordInput = document.getElementById("newPassword");
const changePasswordBtn = document.getElementById("changepwButton");

const newPasswordError = document.getElementById("newPasswordError");
const currentPasswordError = document.getElementById("currentPasswordError");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in.");
    usernameBox.innerHTML = user.email;

    changePasswordBtn.addEventListener("click", () => {
      const currentPassword = currentPasswordInput.value;
      const newPassword = newPasswordInput.value;

      currentPasswordError.innerHTML = "";
      newPasswordError.innerHTML = "";

      signInWithEmailAndPassword(auth, user.email, currentPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          updatePassword(user, newPassword)
            .then(() => {
              console.log("암호를 성공적으로 변경하였습니다.");
              currentPasswordError.innerHTML = "";
            })
            .catch((error) => {
              console.error("비밀번호 변경 실패:", error);
              if (error.code === "auth/wrong-password") {
                currentPasswordError.innerHTML = "현재 비밀번호와 일치하지 않습니다.";
              }
            });
        })
        .catch((error) => {
          console.error("로그인 실패:", error);
        });
    });
  } else {
    window.location.replace("../../");
  }
});

function firebaselogout() {
  signOut(auth)
    .then(() => {
      console.log("logged out");
      location.href = "../../";
    })
    .catch((error) => {
      console.log("Error Accured");
    });
}
