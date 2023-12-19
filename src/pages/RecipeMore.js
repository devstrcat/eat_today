import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  BtWrap,
  CakeImg,
  ContentWrap,
  HashTagWrap,
  HeaderWrap,
  MoreMainWrap,
  Title,
} from "../styles/more/moreStyle";
import Search from "../components/Search";
import { getMore } from "../api/more_api";

const RecipeMore = () => {
  const [more, setMore] = useState(
    // initialize = 초기값 셋팅
    {
      imeal: "",
      title: "",
      review: "",
      createdAt: "",
      pics: [],
      tags: [],
      recipe: "",
      ingredient: "",
      bookMark: 0,
    },
  );

  // 최초 렌더링 시 실행
  useEffect(() => {
    // setMore(getMore());
    getMore(setMore);
  }, []);

  // 북마크 버튼
  const [isClicked, setIsClicked] = useState(false);
  const bookMarkHover = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <Search></Search>
      <HeaderWrap>
        <Title>{more.title}</Title>
        <BtWrap>
          <button
            className={isClicked ? "bookmarkhover" : "bookmark"}
            onClick={bookMarkHover}
          ></button>
          <button className="edit"></button>
          <button className="trash"></button>
        </BtWrap>
      </HeaderWrap>
      <MoreMainWrap>
        <CakeImg src={more.pics} />
        <HashTagWrap>
          {more.tags.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </HashTagWrap>
        <ContentWrap>
          <div className="ingredient">{more.ingredient}</div>
          <div className="recipe">{more.recipe}</div>
          <div className="comment">{more.review}</div>
        </ContentWrap>
      </MoreMainWrap>
      <Footer />
    </div>
  );
};

export default RecipeMore;
