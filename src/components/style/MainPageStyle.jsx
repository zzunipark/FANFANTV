import styled from "styled-components";
import fanfantvtitlepngPath from "../assets/images/fanfantvtitle.png";
import UploadImageBackgroundpngPath from "../assets/images/UploadImageLabel.png";
import { Link } from "react-router-dom";

export const LinkSubNav = styled(Link)`
  text-decoration: none;
  color: #a5a5a5;
  font-size: 12px;
  line-height: 34px;
  margin-left: 10px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

export const FooterNav = styled(Link)`
  text-decoration: none;
  color: rgb(130, 130, 130);
  font-size: 14px;
  line-height: 34px;
  font-weight: 200;
  margin-left: 1vw;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const SubNavbar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 33px;
  background-color: rgb(27, 27, 27);
  border-bottom: 1px solid rgb(47, 47, 47);
  padding: 0 5vw;
`;

export const SubNavbarul = styled.ul`
  display: flex;
`;

export const SubNavbarli = styled.li`
  text-decoration: none;
  color: #a5a5a5;
  font-size: 12px;
  line-height: 34px;
  margin-left: 10px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;

export const MainNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: rgb(27, 27, 27);
  padding: 0 5vw;

  @media screen and (max-width: 410px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 130px;
  }
`;

export const MainNavbarLogoText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 75px;
`;

export const MainNavbarul = styled.ul`
  display: flex;
`;

export const MainNavbarli = styled.li`
  text-decoration: none;
  color: rgb(165, 165, 165);
  font-size: 20px;
  line-height: 34px;
  font-weight: 500;
  margin-left: 2vw;
  opacity: 0.6;
  cursor: pointer;

  &:first-child {
    margin-right: 5px;
  }

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  padding: 0 5vw;
  background-color: rgb(27, 27, 27);
  background-image: url(${fanfantvtitlepngPath});
`;

export const TitleText = styled.div`
  font-size: 40px;
  color: white;
  font-weight: 600;
`;

export const fanfantvtext = styled.span`
  font-weight: 800;

  background-image: linear-gradient(to right, #e50914, white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const textimpact = styled.span`
  font-weight: 600;
  display: inline-block;
  text-align: center;
  width: 65px;
  background-color: #e50914;
  color: white;
  border-radius: 5px;
  margin: 0;
`;

export const DescText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;

export const FeatureBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 175px;
  background-color: rgb(33, 33, 33);
`;

export const FeatureBox1Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeatureBox1Left = styled.div``;

export const FeatureBox1TitleText = styled.p`
  font-size: 30px;
  color: white;
  font-weight: 600;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const FeatureBox1DescText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const FeatureBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 175px;
  background-color: rgb(27, 27, 27);
`;

export const FeatureBox2Right = styled.div``;

export const FeatureBox2Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeatureBox2TitleText = styled.p`
  font-size: 30px;
  color: white;
  font-weight: 600;
  padding-left: 5vw;
  padding-right: 5vw;
  text-align: right;
`;

export const FeatureBox2DescText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding-left: 5vw;
  padding-right: 5vw;
  text-align: right;
`;

export const FeatureBox3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 175px;
  background-color: rgb(33, 33, 33);
`;

export const FeatureBox3Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeatureBox3Left = styled.div``;

export const FeatureBox3TitleText = styled.p`
  font-size: 30px;
  color: white;
  font-weight: 600;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const FeatureBox3DescText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  padding-left: 5vw;
  padding-right: 5vw;
`;

export const SupText = styled.sup`
  font-size: 10px;
`;

export const SmallText = styled.small`
  font-size: 12px;
  color: white;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: rgb(27, 27, 27);
  border-top: 1.5px solid rgb(47, 47, 47);
  border-bottom: 1.5px solid rgb(47, 47, 47);
`;

export const AdditonalText = styled.p`
  font-size: 10px;
  color: #6e6e73;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  background-color: rgb(27, 27, 27);
  padding: 0 5vw;
`;

export const FooterBarul = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const Footerfanfantvinfocontainer = styled.div`
  display: flex;
`;

export const Footerfanfantvinfo = styled.p`
  font-size: 11px;
  color: rgb(130, 130, 130);
  margin-top: 3px;
`;

export const CopyrightText = styled.p`
  font-size: 13px;
  color: rgb(130, 130, 130);
  margin-top: 6px;
`;

export const PleaseLoginContainer = styled.div`
  background-color: rgb(27, 27, 27);
  height: calc(100vh - 75px);
  position: fixed;
  top: 109px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 410px) {
    height: calc(100vh - 130px);
    top: 160px;
  }
`;

export const PleaseLoginTitleText = styled.p`
  font-size: 40px;
  color: white;
  font-weight: 600;
  text-align: center;
  margin-bottom: 120px;
`;

export const AnnounceContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: #2a9df4;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;

  @media screen and (max-width: 530px) {
    height: 80px;
  }

  @media screen and (max-width: 354px) {
    height: 90px;
  }

  @media screen and (max-width: 266px) {
    height: 103px;
  }
`;

export const AnnounceText = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
  line-height: 20px;
`;

export const AnnounceHyperlink = styled.a`
  color: white;
  text-decoration: underline;
  font-weight: 600;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(33, 33, 33);
  padding: 30px 5vw;
`;

export const GalleryImageContainer = styled.div`
  position: relative;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

export const UploadedByText = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 0 5px 5px;
  width: 100%;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 50%;
  max-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const UploadImageContainer = styled.div`
  background-color: rgb(27, 27, 27);
  height: calc(100vh - 75px);
  top: 109px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background-color: rgb(33, 33, 33);
  border-radius: 10px;
  margin-bottom: 150px;
`;

export const UploadImageTitle = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 75px;
`;

export const UploadImageInput = styled.input`
  display: none;
`;

export const UploadImageLabelBox = styled.label`
  width: 300px;
  height: 200px;
  background-color: #2f2f2f;
  border-radius: 5px;
  border: none;
  margin-top: 0px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 75px;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
  background-image: url(${UploadImageBackgroundpngPath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 275px;
  &:focus {
    outline: none;
  }
`;

export const UploadImageProgress = styled.progress`
  width: 320px;
  margin-top: 5px;
`;

export const CancelUploadButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #2f2f2f;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  padding: 5px;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const UploadImageTermssNotice = styled.p`
  color: white;
  font-size: 8px;
  font-weight: 400;
  margin-top: 10px;
`;
