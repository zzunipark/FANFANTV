import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../style/NotfoundPageStyle";

const NotfoundPage = () => {
	const navigate = useNavigate();

	return (
		<s.NotfoundPageContainer>
			<s.NotfoundPageTitleText>404</s.NotfoundPageTitleText>
			<s.NotfoundPageSubTitle>
				페이지를 찾을 수 없습니다
			</s.NotfoundPageSubTitle>
			<s.NotfoundPageDescText>
				요청하신 페이지가 존재하지 않거나
				<br />
				주소가 변경되었을 수 있습니다.
			</s.NotfoundPageDescText>
			<s.BackButton onClick={() => navigate("/")}>
				메인으로 돌아가기
			</s.BackButton>
		</s.NotfoundPageContainer>
	);
};

export default NotfoundPage;
