import * as s from "../style/NotfoundPageStyle";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <s.NotfoundPageContainer>
      <s.NotfoundPageTitleText>404</s.NotfoundPageTitleText>
      <s.NotfoundPageDescText>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        <br />
        <br />
      </s.NotfoundPageDescText>
      <Link to="/">
        <s.NotfoundPageDescText>
          메인 페이지로 이동하시려면 여기를 클릭하세요.
        </s.NotfoundPageDescText>
      </Link>
    </s.NotfoundPageContainer>
  );
};

export default NotfoundPage;
