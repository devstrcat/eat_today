import React, { useState } from "react";
import Search from "../../components/Search";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import {
  NoticeBoardDiv,
  NoticeBoardPics,
  NoticeBoardStyle,
  NoticeBoardTags,
} from "../../styles/meal/mealSmall";

const MealSmall = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [buttonClicked, setButtonClicked] = useState(false);

  const bigBt = "/images/index/meal_big_button.svg";
  const bigBtHover = "/images/index/meal_big_hover_button.svg";
  const smallBt = "/images/index/meal_small_button.svg";
  const smallBtHover = "/images/index/meal_small_hover_button.svg";

  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  // ButtonDiv emotion
  const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    margin: 10px 20px 0;
  `;

  const ButtonBig = styled.button`
    width: 17px;
    height: 17px;
    background: url(${buttonClicked ? bigBt : bigBtHover}) no-repeat;
    background-size: cover;
    cursor: pointer;
  `;
  const ButtonSmall = styled.button`
    width: 17px;
    height: 17px;
    background: url(${buttonClicked ? smallBtHover : smallBt}) no-repeat;
    background-size: cover;
    cursor: pointer;
  `;
  return (
    <div>
      <Search></Search>
      <main>
        <div>
          <ButtonDiv>
            <Link to={"/meal/big"}>
              <ButtonBig onClick={buttonClick}></ButtonBig>
            </Link>
            <Link to={"/meal/small"}>
              <ButtonSmall onClick={buttonClick}></ButtonSmall>
            </Link>
          </ButtonDiv>
        </div>
        <NoticeBoardDiv>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
          <NoticeBoardStyle>
            <NoticeBoardPics>
              <img src="/images/choco.png" alt="사진을 넣어주세요" />
            </NoticeBoardPics>
            <NoticeBoardTags>
              <span># 초콜릿</span>
              <span># 테그</span>
              <span># 힘들다</span>
              <span># 난 뭐했니</span>
              <span># 하앙 집갈레</span>
            </NoticeBoardTags>
          </NoticeBoardStyle>
        </NoticeBoardDiv>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MealSmall;
