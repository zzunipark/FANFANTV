import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as s from "../style/LoginPageStyle";
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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in");
        setRedirect(true);
      } else {
        console.log("User is signed out");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
      window.location.href = "/";
    }
  }, [redirect]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorText(getErrorMessage(error.code));
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "유효하지 않은 이메일 주소입니다.";
      case "auth/user-not-found":
        return "이메일에 해당하는 계정이 없습니다.";
      case "auth/wrong-password":
        return "비밀번호가 일치하지 않습니다.";
      case "auth/too-many-requests":
        return "로그인 시도 횟수가 너무 많습니다. 잠시 후 다시 시도하십시오.";
      case "auth/missing-password":
        return "비밀번호를 입력해주세요.";
      case "auth/network-request-failed":
        return "네트워크 연결이 불안정합니다. 잠시 후 다시 시도하십시오.";
      default:
        return "로그인 중 오류가 발생했습니다. 잠시 후 다시 시도하십시오.";
    }
  };

  return (
    <s.LoginContainer>
      <Link to="/">
        <s.FANFANTVTitle>FANFANTV</s.FANFANTVTitle>
      </Link>
      <s.LoginBox>
        <s.LoginBoxTitle>로그인</s.LoginBoxTitle>
        <s.LoginBoxDesc>FANFANTV 계정으로 로그인</s.LoginBoxDesc>
        <s.EmailInputBox
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></s.EmailInputBox>
        <s.PasswordInputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></s.PasswordInputBox>
        <s.ErrorText>{errorText}</s.ErrorText>
        <s.ReminderText>
          로그인하면 FANFANTV의 이용약관과 개인정보처리방침에 동의한것으로
          간주됩니다.
        </s.ReminderText>
        <s.LoginButton onClick={handleLogin}>로그인</s.LoginButton>
        <Link to="/forgot-password">
          <s.ForgotPasswordText>비밀번호를 잊으셨나요?</s.ForgotPasswordText>
        </Link>
      </s.LoginBox>
    </s.LoginContainer>
  );
};

export default LoginPage;
