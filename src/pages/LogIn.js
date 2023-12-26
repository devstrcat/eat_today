import React from "react";
import { Link } from "react-router-dom";
import { Aaa, Baa, Ccc, Wraps } from "../styles/myuser/MyUser";

const User = () => {
  return (
    <Wraps>
      <Ccc>
        <Aaa>
          <img src="../../images/main_logo.svg" alt="사진이없어요"></img>
          <label className="user">
            <input
              type="text"
              name="username"
              placeholder="아이디"
              className="id"
            />
          </label>

          <label className="user">
            <input
              type="text"
              name="username"
              placeholder="비밀번호"
              className="pw"
            />
          </label>
        </Aaa>
        <Baa>
          <Link to={"/meal"}>LOGIN</Link>
        </Baa>
      </Ccc>
    </Wraps>
  );
};

export default User;
