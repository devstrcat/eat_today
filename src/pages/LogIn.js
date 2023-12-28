import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostUserS } from "../api/user/signup_api";
import {
  ButtonLog,
  LogBox,
  LogBoxs,
  Sign,
  Wraps,
} from "../styles/myuser/mylog";

const LogIn = () => {
  //로그인
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const Navigate = useNavigate();

  const goRouter = e => {
    e.preventDefault();
    const objs = {
      uid: uid,
      upw: upw,
    };
    if (!uid || !upw) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    PostUserS(objs, successPostUserS, failPostUserS);
  };

  const successPostUserS = _data => {
    // console.log("successPostUserS :", _data);
    if (_data.result === 1) {
      alert(`${uid}님이 로그인 되었습니다.`);
      Navigate("/meal");
    } else if (_data.result === 2) {
      alert(`아이디를 다시 확인해 주세요.`);
    } else if (_data.result === 3) {
      alert(`비밀번호를 다시 확인해 주세요.`);
    }
  };

  const failPostUserS = () => {
    // window.location.href = "/";
    Navigate("/");
  };

  return (
    <Wraps>
      <LogBoxs>
        <LogBox>
          <img src="../../images/main_logo.svg" alt="사진이없어요"></img>
          <label className="user">
            <input
              type="text"
              name="username"
              value={uid}
              onChange={e => setUid(e.target.value)}
              placeholder="아이디"
              className="id"
            />
          </label>

          <label className="user">
            <input
              type="password"
              value={upw}
              name="usernam"
              onChange={e => setUpw(e.target.value)}
              placeholder="비밀번호"
              className="pw"
            />
          </label>
        </LogBox>
        <Link to={"/meal/signup"}>
          <Sign>회원가입</Sign>
        </Link>
        <ButtonLog onClick={e => goRouter(e)}>로그인</ButtonLog>
      </LogBoxs>
    </Wraps>
  );
};

export default LogIn;
