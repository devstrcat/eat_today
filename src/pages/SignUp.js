import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostUser } from "../api/user/user_api";
import { Cover, Log, MyUser, UserButton } from "../styles/myuser/MyUser";
import { Button, Modal } from "antd";

const SignUp = () => {
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const [nm, setNm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();

  // setPic은 아직 사용 안함

  const handleClickUser = e => {
    e.preventDefault();
    const obj = {
      uid: uid,
      upw: upw,
      nm: nm,
    };
    if (!uid || !upw || !nm) {
      setIsModalOpen(true);
      setModalContent("빈 항목을 입력해 주세요");
      return;
    }
    setIsModalOpen(true);
    alert(`${uid}님이 가입 되셨습니다.`);
    PostUser(obj);
    navigate("/meal/login");
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    //회원 가입
    <Cover>
      <MyUser>
        <img src="../../images/main_logo.svg" alt="유저사진"></img>
        <Log>
          <div>
            <span>닉네임:</span>
            <input
              type="text"
              value={nm}
              onChange={e => setNm(e.target.value)}
            />
          </div>
          <div>
            <span>아이디:</span>
            <input
              type="text"
              value={uid}
              onChange={e => setUid(e.target.value)}
              className="id"
            />
          </div>

          <div>
            <span>비밀번호:</span>
            <input
              type="password"
              value={upw}
              onChange={e => setUpw(e.target.value)}
            />
          </div>
          <UserButton onClick={e => handleClickUser(e)}>회원가입</UserButton>
        </Log>
      </MyUser>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        closable={false}
        style={{ textAlign: "center" }}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>{modalContent}</p>
      </Modal>
    </Cover>
  );
};

export default SignUp;
