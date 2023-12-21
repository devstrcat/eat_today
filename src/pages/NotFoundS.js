import React from "react";
import { Back, Boxs, Content, Cover, Phrases } from "../styles/notfound";
import { Link } from "react-router-dom";

const NotFoundS = () => {
  return (
    <div>
      <Cover>
        <Boxs>
          <Phrases>505 ERROR</Phrases>
          <Content>
            lnternal Server Error 존재하지 
            <br />
            않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,
            <br />
            삭제되어 찾을 수 없습니다
          </Content>
          <Link to={"/meal"}>
            <Back>홈으로 이동</Back>
          </Link>
        </Boxs>
      </Cover>
    </div>
  );
};

export default NotFoundS;
