/* eslint-disable */
import * as s from "../style/RefuseCollectEmailStyle";
import { Link } from "react-router-dom";

const RefuseCollectEmail = () => {
  return (
    <s.RefuseCollectEmailContainer>
      <Link to="/">
        <s.RefuseCollectEmailDesc>
          메인 페이지로 이동하시려면 여기를 클릭하세요.
        </s.RefuseCollectEmailDesc>
      </Link>
      <s.RefuseCollectEmailTitle>이메일무단수집거부</s.RefuseCollectEmailTitle>
      <s.RefuseCollectEmailDesc>
        본 웹사이트에 게시된 이메일 주소가 전자우편수집프로그램이나 그 밖의
        기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며 이를 위반 시
        정보통신망 이용촉진 및 정보보호 등에 관한 법률에 의해 형사처벌 됨을
        유념하시기 바랍니다.
      </s.RefuseCollectEmailDesc>
      <s.RefuseCollectEmailDesc>
        ■ 제 70조 (벌칙)에 따라 7년 이하의 징역 또는 5천 만원 이하의 벌금에
        처한다.
        <br />
        <br />① 사람을 비방할 목적으로 정보통신망을 통하여 공공연하게 사실을
        드러내어 다른 사람의 명예를 훼손한 자 <br />② 사람을 비방할 목적으로
        정보통신망을 통하여 공공연하게 거짓의 사실을 드러내어 다른 사람의 명예를
        훼손한 자 <br />③ 제1항과 제2항의 죄는 피해자가 구체적으로 밝힌 의사에
        반하여 공소를 제기할 수 없다.
      </s.RefuseCollectEmailDesc>
    </s.RefuseCollectEmailContainer>
  );
};

export default RefuseCollectEmail;
