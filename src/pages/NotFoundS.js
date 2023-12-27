import React from "react";
import { Back, Boxs, Content, Cover, Phrases } from "../styles/notfound";
import { Link } from "react-router-dom";

const NotFoundS = () => {
  return (
    <div>
      <Cover>
        <Boxs>
          <Phrases>500 ERROR</Phrases>
          <Content>
            lnternal Server Error 존재하지 않는
            <br />
            주소를 입력하셨거나요청하신 페이지의
            <br />
            주소가 변경, 삭제되어 찾을 수 없습니다
          </Content>
          <Link to={"/meal"}>
            <Back>홈페이지로 이동</Back>
          </Link>
        </Boxs>
      </Cover>
    </div>
  );
};

export default NotFoundS;
