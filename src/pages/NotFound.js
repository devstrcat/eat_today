import React from "react";

import { Back, Boxs, Content, Cover, Phrases } from "../styles/notfoundStyle";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Cover>
      <Boxs>
        <Phrases>404</Phrases>
        <Content>
          찾을 수 없는 페이지입니다.
          <br />
          요청하신 페이지가 사라졌거나
          <br />
          잘못된 경로를 이용하셨어요
        </Content>
        <Link to={"/meal/big"}>
          <Back>홈으로 이동</Back>
        </Link>
      </Boxs>
    </Cover>
  );
};

export default NotFound;
