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
  width: 550px;
  height: 550x;
  background-color: #252525;
  border-radius: 10px;
`;

export const LoginBoxTitle = styled.p`
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  line-height: 75px;
  letter-spacing: 1px;
  margin-top: 20px;
`;

export const LoginBoxDesc = styled.p`
  color: #a5a5a5;
  font-size: 20px;
  font-weight: 400;
  line-height: 75px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const EmailInputBox = styled.input`
  width: 430px;
  height: 60px;
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
  width: 430px;
  height: 60px;
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
  font-size: 12px;
  font-weight: 400;
  margin-top: 3px;
`;

export const LoginButton = styled.button`
  width: 450px;
  height: 60px;
  background-color: gray;
  border: none;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  border-radius: 50px;
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
