import React from "react";
import { Back, Boxs, Content, Cover, Phrases } from "../styles/notfound";
import { Link } from "react-router-dom";

const NotFoundSS = () => {
  return (
    <div>
      <Cover>
        <Boxs>
          <Phrases>ERROR</Phrases>
          <Content>
            원하시는 결과를 찯을수 없습니다.
            <br />
            올바른 URL 을 입력하였는지 확인하세요.
            <br />
            자세한 내용은 사이트 소유자에게 문의 하시길 바랍니다.
          </Content>
          <Link to={"/meal"}>
            <Back>홈으로 이동</Back>
          </Link>
        </Boxs>
      </Cover>
    </div>
  );
};

export default NotFoundSS;
