import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

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

const uploadbutton = document.querySelector(".uploadButton");
const fileInput = document.getElementById("fileInput");

const previewImage = document.getElementById("previewImage");
const previewContainer = document.querySelector(".preview");

let userId;

const metadata = {
  customMetadata: {
    uploadedBy: userId,
  },
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = user.email;
    console.log("Logged in.");
  } else {
    window.location.replace("../../");
  }
});

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (file) {
    if (file.size > 25 * 1024 * 1024) {
      alert("25MB 이하의 파일을 선택하세요.");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewContainer.style.display = "block";
    };

    reader.readAsDataURL(file);
  } else {
    previewImage.src = "";
    previewContainer.style.display = "none";
  }
});

uploadbutton.onclick = function () {
  uploadImage();
};

const storage = getStorage();
const storageRef = ref(storage, "images");

const uploadProgress = document.getElementById("uploadProgress");

async function uploadImage() {
  const file = fileInput.files[0];

  if (file) {
    const imageName = file.name;
    const imageRef = ref(storageRef, imageName);

    const metadata = {
      customMetadata: {
        uploadedBy: userId,
      },
    };

    try {
      const uploadTask = uploadBytesResumable(imageRef, file, metadata);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadProgress.value = progress;
      });

      await uploadTask;
      console.log("이미지 업로드 완료");

      const imageURL = await getDownloadURL(imageRef);
      previewImage.src = imageURL;
      previewContainer.style.display = "block";

      alert("이미지가 업로드되었습니다.");
      window.location.replace("../");
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      alert("이미지 업로드 오류: " + error.message);
    }
  } else {
    console.error("파일을 선택하세요.");
  }
}
