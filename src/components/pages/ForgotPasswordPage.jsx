/* eslint-disable */
import { useState } from "react";
import { Link } from "react-router-dom";
import * as s from "../style/ForgotPasswordPageStyle";
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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

const ForgotPasswordPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = async () => {
    const email = document.getElementById("email").value;

    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage("입력한 이메일 주소로 비밀번호 재설정 링크를 전송했습니다.\n만약 이메일이 수신되지 않으면 스팸 메일함을 확인해주세요.");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setErrorMessage("유효하지 않은 이메일 주소입니다.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("이메일에 해당하는 계정이 없습니다.");
      } else {
        setErrorMessage("비밀번호 재설정 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <s.ForgotPasswordContainer>
      <s.ForgotPasswordBox>
        <Link to="/">
          <s.FANFANTVTitle>FANFANTV</s.FANFANTVTitle>
        </Link>
        <s.EmailInputBox id="email" placeholder="계정과 연동된 이메일 주소" />
        <s.ErrorText
          dangerouslySetInnerHTML={{
            __html: errorMessage.replace(/\n/g, "<br />"),
          }}
        />
        <s.FindPasswordButton onClick={handleResetPassword}>비밀번호 재설정</s.FindPasswordButton>
      </s.ForgotPasswordBox>
    </s.ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
