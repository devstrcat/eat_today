import styled from "@emotion/styled";
import React from "react";

const MealViewBt = props => {
  const bigBt = "/images/index/meal_big_button.svg";
  const bigBtHover = "/images/index/meal_big_hover_button.svg";
  const smallBt = "/images/index/meal_small_button.svg";
  const smallBtHover = "/images/index/meal_small_hover_button.svg";

  // emotion
  const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    padding: 70px 20px 5px;
  `;

  const ButtonBig = styled.button`
    width: 17px;
    height: 17px;
    background: url(${props.buttonClicked ? bigBt : bigBtHover}) no-repeat;
    background-size: cover;
    cursor: pointer;
  `;
  const ButtonSmall = styled.button`
    width: 17px;
    height: 17px;
    background: url(${props.buttonClicked ? smallBtHover : smallBt}) no-repeat;
    background-size: cover;
    cursor: pointer;
  `;

  return (
    <ButtonDiv>
      <ButtonBig onClick={props.buttonClick}></ButtonBig>
      <ButtonSmall onClick={props.buttonClick}></ButtonSmall>
    </ButtonDiv>
  );
};

export default MealViewBt;
