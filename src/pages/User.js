import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostUser } from "../api/user/user_api";



const LogIn = () => {
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const [nm, setNm] = useState("");
  const [pic, setPic] = useState("");
  // setPic은 아직 사용 안함
  // const [userPost, setUserPost] = useState([]);

  const handleClickUser = e => {
    e.preventDefault();
    const obj = {
      uid: uid,
      upw: upw,
      nm: nm,
      pic: pic,
    };
    if (!uid || !upw || !nm || !pic) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    PostUser(obj);
    console.log("회원 가입이 되었습니다.", obj);
  };

  return (
    //회원 가입
    <myWraps>
      <myWrap>
        <img src="../../images/main_logo.svg" alt="유저사진"></img>
        <myLogForm>
          <myName>
        닉네임:
        <input type="text" value={nm} onChange={e => setNm(e.target.value)} />
        </myName>
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
              className="pw"
            />
          </label>
          <button onClick={e => handleClickUser(e)}>회원가입</button>
        </myLogForm>
        <Link to ={"/meal/log"}>
          <button>홈으로</button>
        </Link>
      </myWrap>
    </myWraps>
  );
};

export default LogIn;
