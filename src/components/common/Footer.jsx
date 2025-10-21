import React from "react";
import * as s from "../style/MainPageStyle";

const Footer = () => {
	return (
		<s.FooterContainer>
			<s.FooterBarul>
				<s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
				<s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
				<s.FooterNav to="/refuse-collect-email">
					이메일무단수집거부
				</s.FooterNav>
				<s.FooterNav to="/service-status">서비스 상태</s.FooterNav>
			</s.FooterBarul>
			<s.Footerfanfantvinfocontainer>
				<s.Footerfanfantvinfo>
					FANFANTV | 전자우편주소 : admin@fanfantv.online
					<br />
					호스팅서비스제공자 : Google LLC.
				</s.Footerfanfantvinfo>
			</s.Footerfanfantvinfocontainer>
			<s.CopyrightText>
				© 2023 FANFANTV. All rights reserved.
			</s.CopyrightText>
			<s.ZzunilabsText>
				FANFANTV is a project of zzuniLabs
			</s.ZzunilabsText>
		</s.FooterContainer>
	);
};

export default Footer;
