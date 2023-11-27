import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: rgb(27, 27, 27);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FANFANTVTitle = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 75px;
`;

export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background-color: #252525;
  border-radius: 10px;
`;

export const SignUpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 50px;
  background-color: #252525;
  border-radius: 10px;
  margin-top: 15px;
`;

export const EmailInputBox = styled.input`
  width: 300px;
  height: 50px;
  background-color: #2f2f2f;
  border-radius: 5px;
  border: none;
  margin-top: 0px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 75px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const PasswordInputBox = styled.input`
  width: 300px;
  height: 50px;
  background-color: #2f2f2f;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 75px;
  color: white;

  &:focus {
    outline: none;
  }
`;

export const ReminderText = styled.p`
  color: #a5a5a5;
  font-size: 9px;
  font-weight: 400;
  margin-top: 3px;
  padding: 0 40px;
`;

export const LoginButton = styled.button`
  width: 320px;
  height: 50px;
  background-color: #ff0000;
  border: none;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  border-radius: 3px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ForgotPasswordText = styled.p`
  color: #a5a5a5;
  font-size: 14px;
  font-weight: 400;
  line-height: 75px;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const SignUpText = styled.div`
  color: #a5a5a5;
  font-size: 14px;
  font-weight: 400;
  line-height: 75px;
  cursor: pointer;
`;

export const Formbox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
