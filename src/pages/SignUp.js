import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostUser } from "../api/user/user_api";
import { Cover, Log, MyUser, UserButton } from "../styles/myuser/MyUser";

const SignUp = () => {
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const [nm, setNm] = useState("");
  const Navigate = useNavigate();

  // setPic은 아직 사용 안함

  const handleClickUser = e => {
    e.preventDefault();
    const obj = {
      uid: uid,
      upw: upw,
      nm: nm,
    };
    if (!uid || !upw || !nm) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    PostUser(obj);
    alert(`${uid}님이 가입 되셨습니다.`);
    Navigate("/meal/login");
  };

  return (
    //회원 가입
    <Cover>
      <MyUser>
        <img src="../../images/main_logo.svg" alt="유저사진"></img>
        <Log>
          <div>
            닉네임:
            <input
              type="text"
              value={nm}
              onChange={e => setNm(e.target.value)}
            />
          </div>
          <label className="user">
            아이디:
            <input
              type="text"
              value={uid}
              onChange={e => setUid(e.target.value)}
              className="id"
            />
          </label>

          <label className="user">
            비밀번호:
            <input
              type="password"
              value={upw}
              onChange={e => setUpw(e.target.value)}
            />
          </label>
          <UserButton onClick={e => handleClickUser(e)}>회원가입</UserButton>
        </Log>
        {/* <Link to={"/meal"}>
          <UserButton>홈으로</UserButton>
        </Link> */}
      </MyUser>
    </Cover>
  );
};

export default SignUp;
