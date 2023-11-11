import styled from "styled-components";
import fanfantvtitlepngPath from "../assets/images/fanfantvtitle.png";
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
`;

export const PleaseLoginTitleText = styled.p`
  font-size: 40px;
  color: white;
  font-weight: 600;
  text-align: center;
  margin-bottom: 120px;
`;
