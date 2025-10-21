import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/SignupPageStyle";

const SignupPage = () => {
	const navigate = useNavigate();

	return (
		<s.SignupContainer>
			<s.IconWrapper>
				<s.LockIcon>🔒</s.LockIcon>
			</s.IconWrapper>
			<s.NoticeTitleText>회원제 서비스 안내</s.NoticeTitleText>
			<s.NoticeDescText>
				FANFANTV는 사전 허가된 사용자만 이용 가능한
				<br />
				회원제 서비스입니다.
			</s.NoticeDescText>
			<s.ContactBox>
				<s.ContactTitle>가입 문의</s.ContactTitle>
				<s.ContactItem>
					<s.ContactLabel>이메일</s.ContactLabel>
					<s.ContactLink href="mailto:admin@fanfantv.online">
						admin@fanfantv.online
					</s.ContactLink>
				</s.ContactItem>
				<s.ContactItem>
					<s.ContactLabel>디스코드</s.ContactLabel>
					<s.ContactText>FANFANTV 공식 디스코드</s.ContactText>
				</s.ContactItem>
			</s.ContactBox>
			<s.BackButton onClick={() => navigate("/")}>
				메인으로 돌아가기
			</s.BackButton>
		</s.SignupContainer>
	);
};

export default SignupPage;
