import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as s from "../style/MainPageStyle";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

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

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        window.location.reload(false);
      })
      .catch((error) => {});
  };

  return (
    <>
      {currentPage === "home" && (
        <div className="home">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? (
                <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli>
              ) : (
                <s.LinkSubNav to="/login">로그인</s.LinkSubNav>
              )}
              {isLoggedIn ? null : (
                <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>
              )}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli
                className={currentPage === "home" ? "active" : ""}
                onClick={() => setCurrentPage("home")}
              >
                홈
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "my" ? "active" : ""}
                onClick={() => setCurrentPage("my")}
              >
                MY
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "gallery" ? "active" : ""}
                onClick={() => setCurrentPage("gallery")}
              >
                갤러리
              </s.MainNavbarli>
            </s.MainNavbarul>
          </s.MainNavbar>
          <s.MainContainer>
            <s.TitleText>
              이제, 새로워진 <s.fanfantvtext>FANFANTV</s.fanfantvtext>에서{" "}
              <s.textimpact>ON</s.textimpact>.
            </s.TitleText>
            <s.DescText>
              수많은 콘텐츠를 무료로 감상하고, 시청하세요. 이용료는 부과되지
              않습니다.
            </s.DescText>
          </s.MainContainer>
          <s.FeatureBox1>
            <s.FeatureBox1Left>
              <s.FeatureBox1TitleText>
                무료로 시청하세요.
              </s.FeatureBox1TitleText>
              <s.FeatureBox1DescText>
                FANFANTV에서는 모든 재밌는, 무서운 컨텐츠들을 무료로 감상할 수
                있습니다.
              </s.FeatureBox1DescText>
            </s.FeatureBox1Left>
            <s.FeatureBox1Right></s.FeatureBox1Right>
          </s.FeatureBox1>
          <s.FeatureBox2>
            <s.FeatureBox2Left></s.FeatureBox2Left>
            <s.FeatureBox2Right>
              <s.FeatureBox2TitleText>
                안전하게 즐기세요.
              </s.FeatureBox2TitleText>
              <s.FeatureBox2DescText>
                FANFANTV는 높은 수준의 보안을 보장합니다. 또한, 신뢰할 수 있는
                플랫폼에서 구동됩니다.
              </s.FeatureBox2DescText>
            </s.FeatureBox2Right>
          </s.FeatureBox2>
          <s.FeatureBox3>
            <s.FeatureBox3Left>
              <s.FeatureBox3TitleText>
                언제든지, 어떻게든.
              </s.FeatureBox3TitleText>
              <s.FeatureBox3DescText>
                FANFANTV는 365일 24시간 내내 중단없이<s.SupText>[1]</s.SupText>{" "}
                언제든지 즉시 이용할 수 있습니다.
                <br />
                모바일 기기, 태블릿, PC, TV 등 어떤 기기로든지
                <s.SupText>[2]</s.SupText> 시청하세요.
              </s.FeatureBox3DescText>
            </s.FeatureBox3Left>
            <s.FeatureBox3Right></s.FeatureBox3Right>
          </s.FeatureBox3>
          <s.AdditionalContainer>
            <s.AdditonalText>
              <s.SupText>[1]</s.SupText>정부의 요청이나 자연재해와 같은
              불가항력적인 상황에 대해서는 보장되지 않을 수 있음.
            </s.AdditonalText>
            <s.AdditonalText>
              <s.SupText>[2]</s.SupText>웹 브라우저가 지원되는 OS가 탑재된
              디바이스에 한함.
            </s.AdditonalText>
          </s.AdditionalContainer>
          <s.FooterContainer>
            <s.FooterBarul>
              <s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
              <s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
              <s.FooterNav to="/refuse-collect-email">
                이메일무단수집거부
              </s.FooterNav>
            </s.FooterBarul>
            <s.Footerfanfantvinfocontainer>
              <s.Footerfanfantvinfo>
                FANFANTV | 전자우편주소 : admin@fanfantv.online
                <br />
                호스팅서비스제공자 : 아마존웹서비시즈코리아 유한회사
              </s.Footerfanfantvinfo>
            </s.Footerfanfantvinfocontainer>
            <s.CopyrightText>
              © 2023 FANFANTV. All rights reserved.
            </s.CopyrightText>
          </s.FooterContainer>
        </div>
      )}
      {currentPage === "my" && (
        <div className="my">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? (
                <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli>
              ) : (
                <s.LinkSubNav to="/login">로그인</s.LinkSubNav>
              )}
              {isLoggedIn ? null : (
                <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>
              )}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli
                className={currentPage === "home" ? "active" : ""}
                onClick={() => setCurrentPage("home")}
              >
                홈
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "my" ? "active" : ""}
                onClick={() => setCurrentPage("my")}
              >
                MY
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "gallery" ? "active" : ""}
                onClick={() => setCurrentPage("gallery")}
              >
                갤러리
              </s.MainNavbarli>
            </s.MainNavbarul>
          </s.MainNavbar>
          {isLoggedIn === false && (
            <div className="pleaselogin">
              <s.PleaseLoginContainer>
                <s.PleaseLoginTitleText>
                  회원 전용 페이지입니다.
                  <br />
                  계속하시려면 로그인 해주세요.
                </s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
          {isLoggedIn === true && (
            <div className="loggedin">
              <s.PleaseLoginContainer>
                <s.PleaseLoginTitleText>
                  로그인 되었으나 준비중인 페이지입니다.
                </s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
        </div>
      )}
      {currentPage === "gallery" && (
        <div className="gallery">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? (
                <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli>
              ) : (
                <s.LinkSubNav to="/login">로그인</s.LinkSubNav>
              )}
              {isLoggedIn ? null : (
                <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>
              )}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli
                className={currentPage === "home" ? "active" : ""}
                onClick={() => setCurrentPage("home")}
              >
                홈
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "my" ? "active" : ""}
                onClick={() => setCurrentPage("my")}
              >
                MY
              </s.MainNavbarli>
              <s.MainNavbarli
                className={currentPage === "gallery" ? "active" : ""}
                onClick={() => setCurrentPage("gallery")}
              >
                갤러리
              </s.MainNavbarli>
            </s.MainNavbarul>
          </s.MainNavbar>
          {isLoggedIn === false && (
            <div className="pleaselogin">
              <s.PleaseLoginContainer>
                <s.PleaseLoginTitleText>
                  회원 전용 페이지입니다.
                  <br />
                  계속하시려면 로그인 해주세요.
                </s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
          {isLoggedIn === true && (
            <div className="loggedin">
              <s.PleaseLoginContainer>
                <s.PleaseLoginTitleText>
                  로그인 되었으나 준비중인 페이지입니다.
                </s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MainPage;
