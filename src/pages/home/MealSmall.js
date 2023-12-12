import React, { useState } from "react";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MealSmall = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [isHidden, setIsHidden] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  // 버튼 클릭 시 상태 변경
  const handleClick = () => {
    setIsHidden(!isHidden);
    setButtonClicked(!buttonClicked);
  };
  const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    margin: 0 20px;
  `;

  const ButtonBig = styled.button`
    width: 17px;
    height: 17px;
    background: url(${buttonClicked ? "/images/index/meal_big_button.svg" : "/images/index/meal_big_hover_button.svg"})
      no-repeat;
    background-size: cover;
    cursor: pointer;
  `;
  const ButtonSmall = styled.button`
    width: 17px;
    height: 17px;
    background: url(${buttonClicked ? "/images/index/meal_small_hover_button.svg": "/images/index/meal_small_button.svg"})
      no-repeat;

    background-size: cover;
    cursor: pointer;
  `;
  return (
    <div>
      <Search handleClick={handleClick} isHidden={isHidden}></Search>
      <main>
        <ButtonDiv>
          <Link to={"/meal/big"}>
            <ButtonBig onClick={handleClick}></ButtonBig>
          </Link>
          <Link to={"/meal/small"}>
            <ButtonSmall onClick={handleClick}></ButtonSmall>
          </Link>
        </ButtonDiv>
        <div></div>
      </main>
      <Footer handleClick={handleClick}></Footer>
    </div>
  );
};

export default MealSmall;
