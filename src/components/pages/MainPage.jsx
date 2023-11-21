/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as s from "../style/MainPageStyle";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";

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
const storage = getStorage();

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [imageMetadata, setImageMetadata] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getCustomMetadata = async (imageRef) => {
    try {
      const metadata = await getMetadata(imageRef);
      return metadata;
    } catch (error) {
      throw error;
    }
  };

  const fetchImageMetadata = async () => {
    try {
      const storageRef = ref(storage, "/images");
      const imagesList = await listAll(storageRef);

      const metadataPromises = imagesList.items.map(async (imageRef) => {
        try {
          const metadata = await getCustomMetadata(imageRef);
          return { uploadedBy: metadata.customMetadata.uploadedBy };
        } catch (error) {
          return { uploadedBy: "Unknown" };
        }
      });

      const metadata = await Promise.all(metadataPromises);
      setImageMetadata(metadata);
    } catch (error) {}
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, "/images");
        const imagesList = await listAll(storageRef);

        const urlsPromises = imagesList.items.map(async (imageRef) => {
          const imageUrl = await getDownloadURL(imageRef);
          return imageUrl;
        });

        const urls = await Promise.all(urlsPromises);
        setImageUrls(urls);
      } catch (error) {}
    };

    fetchImages();
  }, [storage]);

  useEffect(() => {
    const fetchImageMetadata = async () => {
      try {
        const storageRef = ref(storage, "/images");
        const imagesList = await listAll(storageRef);

        const metadataPromises = imagesList.items.map(async (imageRef) => {
          try {
            const metadata = await getCustomMetadata(imageRef);
            return { uploadedBy: metadata.customMetadata.uploadedBy };
          } catch (error) {
            return { uploadedBy: "Unknown" };
          }
        });

        const metadata = await Promise.all(metadataPromises);
        setImageMetadata(metadata);
      } catch (error) {}
    };

    fetchImageMetadata();
  }, [storage]);

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
              {isLoggedIn ? <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli> : <s.LinkSubNav to="/login">로그인</s.LinkSubNav>}
              {isLoggedIn ? null : <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli className={currentPage === "home" ? "active" : ""} onClick={() => setCurrentPage("home")}>
                홈
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "my" ? "active" : ""} onClick={() => setCurrentPage("my")}>
                MY
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "gallery" ? "active" : ""} onClick={() => setCurrentPage("gallery")}>
                갤러리
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "upload" ? "active" : ""} onClick={() => setCurrentPage("upload")}>
                이미지 업로드
              </s.MainNavbarli>
            </s.MainNavbarul>
          </s.MainNavbar>
          <s.AnnounceContainer>
            <s.AnnounceText>
              현재 새 버전의 웹사이트를 사용중입니다. 일부 기능이 동작하지 않을 수 있으며, 페이지가 완전하지 않을 수 있습니다. 이전 버전의 웹사이트로 돌아가려면 <s.AnnounceHyperlink href="https://legacy.fanfantv.online">여기</s.AnnounceHyperlink>를 클릭해주세요.
            </s.AnnounceText>
          </s.AnnounceContainer>
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
              <s.FeatureBox2DescText>FANFANTV는 높은 수준의 보안을 보장합니다. 또한, 신뢰할 수 있는 플랫폼에서 구동됩니다.</s.FeatureBox2DescText>
            </s.FeatureBox2Right>
          </s.FeatureBox2>
          <s.FeatureBox3>
            <s.FeatureBox3Left>
              <s.FeatureBox3TitleText>언제든지, 어떻게든.</s.FeatureBox3TitleText>
              <s.FeatureBox3DescText>
                FANFANTV는 365일 24시간 내내 중단없이<s.SupText>[1]</s.SupText> 언제든지 즉시 이용할 수 있습니다.
                <br />
                모바일 기기, 태블릿, PC, TV 등 어떤 기기로든지
                <s.SupText>[2]</s.SupText> 시청하세요.
              </s.FeatureBox3DescText>
            </s.FeatureBox3Left>
            <s.FeatureBox3Right></s.FeatureBox3Right>
          </s.FeatureBox3>
          <s.AdditionalContainer>
            <s.AdditonalText>
              <s.SupText>[1]</s.SupText>정부의 요청이나 자연재해와 같은 불가항력적인 상황에 대해서는 보장되지 않을 수 있음.
            </s.AdditonalText>
            <s.AdditonalText>
              <s.SupText>[2]</s.SupText>웹 브라우저가 지원되는 OS가 탑재된 디바이스에 한함.
            </s.AdditonalText>
          </s.AdditionalContainer>
          <s.FooterContainer>
            <s.FooterBarul>
              <s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
              <s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
              <s.FooterNav to="/refuse-collect-email">이메일무단수집거부</s.FooterNav>
            </s.FooterBarul>
            <s.Footerfanfantvinfocontainer>
              <s.Footerfanfantvinfo>
                FANFANTV | 전자우편주소 : admin@fanfantv.online
                <br />
                호스팅서비스제공자 : Google LLC.
              </s.Footerfanfantvinfo>
            </s.Footerfanfantvinfocontainer>
            <s.CopyrightText>© 2023 FANFANTV. All rights reserved.</s.CopyrightText>
          </s.FooterContainer>
        </div>
      )}
      {currentPage === "my" && (
        <div className="my">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli> : <s.LinkSubNav to="/login">로그인</s.LinkSubNav>}
              {isLoggedIn ? null : <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli className={currentPage === "home" ? "active" : ""} onClick={() => setCurrentPage("home")}>
                홈
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "my" ? "active" : ""} onClick={() => setCurrentPage("my")}>
                MY
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "gallery" ? "active" : ""} onClick={() => setCurrentPage("gallery")}>
                갤러리
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "upload" ? "active" : ""} onClick={() => setCurrentPage("upload")}>
                이미지 업로드
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
                <s.PleaseLoginTitleText>로그인 되었으나 준비중인 페이지입니다.</s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
          <s.FooterContainer>
            <s.FooterBarul>
              <s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
              <s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
              <s.FooterNav to="/refuse-collect-email">이메일무단수집거부</s.FooterNav>
            </s.FooterBarul>
            <s.Footerfanfantvinfocontainer>
              <s.Footerfanfantvinfo>
                FANFANTV | 전자우편주소 : admin@fanfantv.online
                <br />
                호스팅서비스제공자 : Google LLC.
              </s.Footerfanfantvinfo>
            </s.Footerfanfantvinfocontainer>
            <s.CopyrightText>© 2023 FANFANTV. All rights reserved.</s.CopyrightText>
          </s.FooterContainer>
        </div>
      )}
      {currentPage === "gallery" && (
        <div className="gallery">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli> : <s.LinkSubNav to="/login">로그인</s.LinkSubNav>}
              {isLoggedIn ? null : <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli className={currentPage === "home" ? "active" : ""} onClick={() => setCurrentPage("home")}>
                홈
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "my" ? "active" : ""} onClick={() => setCurrentPage("my")}>
                MY
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "gallery" ? "active" : ""} onClick={() => setCurrentPage("gallery")}>
                갤러리
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "upload" ? "active" : ""} onClick={() => setCurrentPage("upload")}>
                이미지 업로드
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
              <s.AnnounceContainer>
                <s.AnnounceText>교내 와이파이 DNS 서버 응답 지연으로 추정되는 문제로 교내 와이파이 사용시 이미지를 불러오는 속도가 느려질 수 있습니다.</s.AnnounceText>
              </s.AnnounceContainer>
              <s.GalleryContainer>
                {imageUrls.map((imageUrl, index) => (
                  <s.GalleryImageContainer key={index} onClick={() => setSelectedImage(imageUrl)}>
                    <img src={imageUrl} alt={`gallery-image-${index}`} />
                    <s.UploadedByText>Uploaded by: {imageMetadata[index]?.uploadedBy || "Unknown"}</s.UploadedByText>
                  </s.GalleryImageContainer>
                ))}
              </s.GalleryContainer>

              {selectedImage && (
                <>
                  <s.ModalContainer onClick={() => setSelectedImage(null)}>
                    <s.ModalContent>
                      <img
                        src={selectedImage}
                        alt="selected-image"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </s.ModalContent>
                  </s.ModalContainer>
                </>
              )}

              <s.FooterContainer>
                <s.FooterBarul>
                  <s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
                  <s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
                  <s.FooterNav to="/refuse-collect-email">이메일무단수집거부</s.FooterNav>
                </s.FooterBarul>
                <s.Footerfanfantvinfocontainer>
                  <s.Footerfanfantvinfo>
                    FANFANTV | 전자우편주소 : admin@fanfantv.online
                    <br />
                    호스팅서비스제공자 : Google LLC.
                  </s.Footerfanfantvinfo>
                </s.Footerfanfantvinfocontainer>
                <s.CopyrightText>© 2023 FANFANTV. All rights reserved.</s.CopyrightText>
              </s.FooterContainer>
            </div>
          )}
        </div>
      )}
      {currentPage === "upload" && (
        <div className="upload">
          <s.SubNavbar>
            <s.SubNavbarul>
              {isLoggedIn ? <s.SubNavbarli onClick={handleLogout}>로그아웃</s.SubNavbarli> : <s.LinkSubNav to="/login">로그인</s.LinkSubNav>}
              {isLoggedIn ? null : <s.LinkSubNav to="/signup">회원가입</s.LinkSubNav>}
              <s.SubNavbarli>
                <s.LinkSubNav to="/notice">공지사항</s.LinkSubNav>
              </s.SubNavbarli>
            </s.SubNavbarul>
          </s.SubNavbar>
          <s.MainNavbar>
            <s.MainNavbarLogoText>FANFANTV</s.MainNavbarLogoText>
            <s.MainNavbarul>
              <s.MainNavbarli className={currentPage === "home" ? "active" : ""} onClick={() => setCurrentPage("home")}>
                홈
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "my" ? "active" : ""} onClick={() => setCurrentPage("my")}>
                MY
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "gallery" ? "active" : ""} onClick={() => setCurrentPage("gallery")}>
                갤러리
              </s.MainNavbarli>
              <s.MainNavbarli className={currentPage === "upload" ? "active" : ""} onClick={() => setCurrentPage("upload")}>
                이미지 업로드
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
                <s.PleaseLoginTitleText>로그인 되었으나 준비중인 페이지입니다.</s.PleaseLoginTitleText>
              </s.PleaseLoginContainer>
            </div>
          )}
          <s.FooterContainer>
            <s.FooterBarul>
              <s.FooterNav to="/terms-of-service">이용약관</s.FooterNav>
              <s.FooterNav to="/privacy-policy">개인정보처리방침</s.FooterNav>
              <s.FooterNav to="/refuse-collect-email">이메일무단수집거부</s.FooterNav>
            </s.FooterBarul>
            <s.Footerfanfantvinfocontainer>
              <s.Footerfanfantvinfo>
                FANFANTV | 전자우편주소 : admin@fanfantv.online
                <br />
                호스팅서비스제공자 : Google LLC.
              </s.Footerfanfantvinfo>
            </s.Footerfanfantvinfocontainer>
            <s.CopyrightText>© 2023 FANFANTV. All rights reserved.</s.CopyrightText>
          </s.FooterContainer>
        </div>
      )}
    </>
  );
};

export default MainPage;
