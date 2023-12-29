import { Button, Modal } from "antd";
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
  const [uid, setUid] = useState("");
  const [upw, setUpw] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const Navigate = useNavigate();

  const goRouter = e => {
    e.preventDefault();
    const objs = {
      uid: uid,
      upw: upw,
    };

    if (!uid || !upw) {
      setModalContent("회원가입을 해주세요.");
      setIsModalOpen(true);
      return;
    }

    PostUserS(objs, successPostUserS, failPostUserS);
  };

  const successPostUserS = _data => {
    if (_data.result === 1) {
      setIsModalOpen(true);
      alert(`${uid}님이 로그인 되었습니다.`);
      Navigate("/meal");
    } else if (_data.result === 2) {
      setModalContent("아이디를 확인해 주세요.");
      setIsModalOpen(true);
    } else if (_data.result === 3) {
      setModalContent("비밀번호를 확인해 주세요.");
      setIsModalOpen(true);
    }
  };

  const failPostUserS = () => {
    setModalContent("서버 에러가 발생했습니다.");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
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
              autoComplete="username"
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
              autoComplete="current-password"
            />
          </label>
        </LogBox>
        <ButtonLog onClick={e => goRouter(e)}>로그인</ButtonLog>
        <Link to={"/meal/signup"}>
          <Sign>회원가입</Sign>
        </Link>
        <Modal
          className="ant-modal-content"
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
      </LogBoxs>
    </Wraps>
  );
};

export default LogIn;
