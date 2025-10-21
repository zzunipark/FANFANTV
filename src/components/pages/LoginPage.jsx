import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as s from "../style/LoginPageStyle";
import { authAPI } from "../../api/api";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	// 이미 로그인된 경우 메인 페이지로 리다이렉트
	useEffect(() => {
		if (authAPI.isLoggedIn()) {
			navigate("/");
		}
	}, [navigate]);

	const handleLogin = async () => {
		if (isLoading) return;

		try {
			setIsLoading(true);
			setErrorText("");

			await authAPI.login(email, password);

			// 로그인 성공 시 메인 페이지로 이동
			navigate("/");
		} catch (error) {
			setErrorText(getErrorMessage(error.code || error.message));
		} finally {
			setIsLoading(false);
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await handleLogin();
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
			case "auth/missing-fields":
				return "이메일과 비밀번호를 모두 입력해주세요.";
			case "auth/network-request-failed":
				return "네트워크 연결이 불안정합니다. 잠시 후 다시 시도하십시오.";
			default:
				return (
					errorCode ||
					"로그인 중 오류가 발생했습니다. 잠시 후 다시 시도하십시오."
				);
		}
	};

	return (
		<s.LoginContainer>
			<s.LoginBox>
				<Link to="/" style={{ textDecoration: "none" }}>
					<s.FANFANTVTitle>FANFANTV</s.FANFANTVTitle>
				</Link>
				<s.Formbox onSubmit={handleFormSubmit}>
					<s.InputWrapper>
						<s.InputLabel>이메일</s.InputLabel>
						<s.EmailInputBox
							type="email"
							placeholder="example@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							disabled={isLoading}
						/>
					</s.InputWrapper>
					<s.InputWrapper>
						<s.InputLabel>비밀번호</s.InputLabel>
						<s.PasswordInputBox
							type="password"
							placeholder="비밀번호를 입력하세요"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							maxLength={15}
							required
							disabled={isLoading}
						/>
					</s.InputWrapper>
					{errorText && <s.ErrorText>{errorText}</s.ErrorText>}
					<s.LoginButton type="submit" disabled={isLoading}>
						{isLoading ? "로그인 중..." : "로그인"}
					</s.LoginButton>
					<s.ReminderText>
						로그인하면 귀하는 당사의 개인정보처리방침과 이용약관에
						동의한 것으로 간주됩니다.
					</s.ReminderText>
				</s.Formbox>
				<Link
					to="/forgot-password"
					style={{ textDecoration: "none", width: "100%" }}
				>
					<s.ForgotPasswordText>
						비밀번호를 잊으셨나요?
					</s.ForgotPasswordText>
				</Link>
			</s.LoginBox>
			<s.SignUpBox>
				<s.SignUpText>아직 회원이 아니신가요?</s.SignUpText>
				<Link to="/signup" style={{ textDecoration: "none" }}>
					<s.SignUpButton>회원가입</s.SignUpButton>
				</Link>
			</s.SignUpBox>
		</s.LoginContainer>
	);
};

export default LoginPage;
