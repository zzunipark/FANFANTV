import React from "react";
import * as s from "../style/style";

function MainPage() {
  const [currentPage, setCurrentPage] = React.useState("home");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <s.SubNavbar>
        <s.SubNavbarul>
          {isLoggedIn ? <s.SubNavbarli>로그아웃</s.SubNavbarli> : <s.SubNavbarli>로그인</s.SubNavbarli>}
          {isLoggedIn ? null : <s.SubNavbarli>회원가입</s.SubNavbarli>}
          <s.SubNavbarli>공지사항</s.SubNavbarli>
        </s.SubNavbarul>
      </s.SubNavbar>
      <s.MainNavbar>
        <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
        <s.MainNavbarul>
          <s.MainNavbarli className="active">홈</s.MainNavbarli>
          <s.MainNavbarli>MY</s.MainNavbarli>
          <s.MainNavbarli>갤러리</s.MainNavbarli>
        </s.MainNavbarul>
      </s.MainNavbar>
      <s.MainContainer>
        <s.TitleText>
          이제, 새로워진 <s.fanfantvtext>FANFANTV</s.fanfantvtext>에서 <s.textimpact>ON</s.textimpact>.
        </s.TitleText>
        <s.DescText>수많은 콘텐츠를 무료로 감상하고, 시청하세요. 이용료는 부과되지 않습니다.</s.DescText>
      </s.MainContainer>
      <s.FeatureBox1>
        <s.FeatureBox1Left>
          <s.FeatureBox1TitleText>무료로 시청하세요.</s.FeatureBox1TitleText>
          <s.FeatureBox1DescText>FANFANTV에서는 모든 재밌는, 무서운 컨텐츠들을 무료로 감상할 수 있습니다.</s.FeatureBox1DescText>
        </s.FeatureBox1Left>
        <s.FeatureBox1Right></s.FeatureBox1Right>
      </s.FeatureBox1>
      <s.FeatureBox2>
        <s.FeatureBox2Left></s.FeatureBox2Left>
        <s.FeatureBox2Right>
          <s.FeatureBox2TitleText>안전하게 즐기세요.</s.FeatureBox2TitleText>
          <s.FeatureBox2DescText>FANFANTV는 제 3자에게 운영에 필요한 최소한의 정보 외에는 일체의 정보를 제공하고 있지 않습니다.</s.FeatureBox2DescText>
        </s.FeatureBox2Right>
      </s.FeatureBox2>
      <s.FeatureBox3>
        <s.FeatureBox3Left>
          <s.FeatureBox3TitleText>언제든지, 어떻게든.</s.FeatureBox3TitleText>
          <s.FeatureBox3DescText>
            FANFANTV는 365일 24시간 내내 중단없이 언제든지 즉시 이용할 수 있습니다.
            <br />
            모바일 기기, 태블릿, PC, TV 등 어떤 기기로든지<s.SupText>[1]</s.SupText> 시청하세요.
          </s.FeatureBox3DescText>
        </s.FeatureBox3Left>
        <s.FeatureBox3Right></s.FeatureBox3Right>
      </s.FeatureBox3>
    </>
  );
}

export default MainPage;
