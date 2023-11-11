import * as s from "../style/SignupPageStyle";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <s.SignupContainer>
      <s.NoticeTitleText>
        FANFANTV는 회원제 서비스로, 사전 허가된 사용자만 이용이 가능합니다.
      </s.NoticeTitleText>
      <s.NoticeDescText>
        만약, 허가 권한이 있는 경우 아래의 이메일 주소로 연락주시거나, <br />
        FANFANTV 디스코드를 통해 문의해주시기 바랍니다.
        <br />
        <br />
        admin@fanfantv.online
        <br />
        <br />
      </s.NoticeDescText>
      <Link to="/">
        <s.NoticeDescText>
          메인 페이지로 이동하시려면 여기를 클릭하세요.
        </s.NoticeDescText>
      </Link>
    </s.SignupContainer>
  );
};

export default SignupPage;
