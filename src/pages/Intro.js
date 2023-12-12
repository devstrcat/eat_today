import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  // emotion 적용
  const IntroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--brand-color);
  `;
  const IntroImg = styled.img`
    object-fit: cover;
  `;

  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 "/home"으로 이동
    const timeoutId = setTimeout(() => {
      navigate("/meal");
    }, 2000);

    // 컴포넌트가 언마운트될 때 타이머 제거
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <IntroDiv>
      <IntroImg src="/images/Intro_logo.svg" />
    </IntroDiv>
  );
};

export default Intro;
