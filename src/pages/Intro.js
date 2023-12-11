import styled from "@emotion/styled";
import React from "react";

const Intro = () => {
  const IntroDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: var(--base-background-color);
  `;
  const IntroImg = styled.img`
    object-fit: cover;
  `;
  return (
    <IntroDiv>
      <IntroImg src="/images/Intro_logo.svg" />
    </IntroDiv>
  );
};

export default Intro;
