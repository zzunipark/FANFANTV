const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const thumbnailGrid = document.querySelector(".thumbnail-grid");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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
const storage = getStorage();
const auth = getAuth();

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", firebaselogout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in.");
  } else {
    window.location.replace("../");
  }
});

function firebaselogout() {
  signOut(auth)
    .then(() => {
      console.log("logged out");
      location.href = "../";
    })
    .catch((error) => {});
}

function displayImages() {
  const imagesRef = ref(storage, "images/");

  listAll(imagesRef)
    .then(function (result) {
      result.items.forEach(function (imageRef) {
        const img = document.createElement("img");
        const userIdParagraph = document.createElement("p");

        getDownloadURL(imageRef)
          .then(function (url) {
            img.src = url;

            const isGif = url.toLowerCase().endsWith(".gif");

            if (isGif) {
              img.setAttribute("autoplay", true);
            }

            getMetadata(imageRef)
              .then(function (metadata) {
                const userId = metadata.customMetadata.uploadedBy;

                userIdParagraph.textContent = `게시자 : ${userId}`;

                userIdParagraph.style.fontSize = "10px";

                const thumbnailDiv = document.createElement("div");
                thumbnailDiv.classList.add("thumbnail");

                thumbnailDiv.appendChild(img);
                thumbnailDiv.appendChild(userIdParagraph);

                const thumbnailGrid = document.querySelector(".thumbnail-grid");
                thumbnailGrid.appendChild(thumbnailDiv);
              })
              .catch(function (error) {
                console.error("메타데이터 가져오기 실패:", error);
              });
          })
          .catch(function (error) {
            console.error("이미지 가져오기 실패:", error);
          });
      });
    })
    .catch(function (error) {
      console.error("파일 목록 가져오기 실패:", error);
    });
}

window.onload = displayImages;
