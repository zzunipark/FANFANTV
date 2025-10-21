import React from "react";
import * as s from "../style/MainPageStyle";

const LoginPrompt = () => {
	return (
		<s.PleaseLoginContainer>
			<s.PleaseLoginTitleText>
				회원 전용 페이지입니다.
				<br />
				계속하시려면 로그인 해주세요.
			</s.PleaseLoginTitleText>
		</s.PleaseLoginContainer>
	);
};

export default LoginPrompt;
