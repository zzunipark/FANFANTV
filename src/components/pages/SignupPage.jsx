import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../api/api";
import * as s from "../style/SignupPageStyle";

const SignupPage = () => {
	const navigate = useNavigate();
	const [selectedNumber, setSelectedNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const studentNumbers = Array.from(
		{ length: 18 },
		(_, i) => `s230${37 + i}`
	);

	const handleSignup = async (e) => {
		e.preventDefault();

		if (!selectedNumber) {
			window.alert("학번을 선택해주세요.");
			return;
		}

		if (!password) {
			window.alert("비밀번호를 입력해주세요.");
			return;
		}

		if (password.length < 6) {
			window.alert("비밀번호는 최소 6자 이상이어야 합니다.");
			return;
		}

		if (password !== confirmPassword) {
			window.alert("비밀번호가 일치하지 않습니다.");
			return;
		}

		const email = `${selectedNumber}@gsm.hs.kr`;

		try {
			setIsLoading(true);
			await authAPI.signup(email, password);
			window.alert("회원가입이 완료되었습니다!");
			navigate("/");
		} catch (error) {
			console.error("회원가입 실패:", error);
			window.alert(error.message || "회원가입 중 오류가 발생했습니다.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<s.SignupContainer>
			<s.SignupBox>
				<s.SignupTitle>회원가입</s.SignupTitle>
				<s.SignupSubtitle>GSM 학생 전용 서비스</s.SignupSubtitle>

				<s.SignupForm onSubmit={handleSignup}>
					<s.FormGroup>
						<s.Label>학번 선택</s.Label>
						<s.Select
							value={selectedNumber}
							onChange={(e) => setSelectedNumber(e.target.value)}
							required
						>
							<option value="">학번을 선택하세요</option>
							{studentNumbers.map((num) => (
								<option key={num} value={num}>
									{num}@gsm.hs.kr
								</option>
							))}
						</s.Select>
					</s.FormGroup>

					<s.FormGroup>
						<s.Label>비밀번호</s.Label>
						<s.Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="6자 이상 입력"
							required
						/>
					</s.FormGroup>

					<s.FormGroup>
						<s.Label>비밀번호 확인</s.Label>
						<s.Input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="비밀번호 재입력"
							required
						/>
					</s.FormGroup>

					<s.SignupButton type="submit" disabled={isLoading}>
						{isLoading ? "가입 중..." : "회원가입"}
					</s.SignupButton>
				</s.SignupForm>

				<s.LoginLink onClick={() => navigate("/login")}>
					이미 계정이 있으신가요? 로그인
				</s.LoginLink>
			</s.SignupBox>
		</s.SignupContainer>
	);
};

export default SignupPage;
