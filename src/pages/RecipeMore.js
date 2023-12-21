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
import { useParams } from "react-router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { deleteMore } from "../api/more_api";

// 서버에서 돌려주는 값
const initMoreData = {
  imeal: 0,
  title: "",
  review: "",
  createdAt: "",
  pics: [""],
  tags: [""],
  recipe: "",
  ingredient: "",
  bookMark: 0,
};
const RecipeMore = () => {
  const param = useParams();
  const imeal = parseInt(param.imeal);
  // console.log(imeal);

  const [moreData, setMoreData] = useState(initMoreData);

  // 최초 렌더링 시 실행
  useEffect(() => {
    // setMore(getMore());
    getMore(imeal, setMoreData);
  }, []);

  // 북마크 버튼
  const [isClicked, setIsClicked] = useState(false);
  const bookMarkHover = () => {
    setIsClicked(!isClicked);
  };

  const handleDelete = () => {
    deleteMore(imeal, setMoreData);
  };
  return (
    <div>
      <HeaderWrap>
        <Title>{moreData.title}</Title>
        <BtWrap>
          <button
            className={isClicked ? "bookmarkhover" : "bookmark"}
            onClick={bookMarkHover}
          ></button>
          <Link to="/meal/edit">
            <button className="edit"></button>
          </Link>
          <Link to="/meal">
            <button className="trash" onClick={handleDelete}></button>
          </Link>
        </BtWrap>
      </HeaderWrap>
      <MoreMainWrap>
        {/* 사진이 2장이다 대표 이미지[0] 슬라이드 고민 [1] */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwipper">
          {moreData.pics &&
            moreData.pics.map((pic, index) => (
              <SwiperSlide key={index}>
                <CakeImg src={pic} />
              </SwiperSlide>
            ))}
        </Swiper>
        <HashTagWrap>
          {moreData.tags &&
            moreData.tags.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </HashTagWrap>
        <ContentWrap>
          <div className="ingredient">{moreData.ingredient}</div>
          <div className="recipe">{moreData.recipe}</div>
          <div className="review">{moreData.review}</div>
        </ContentWrap>
      </MoreMainWrap>
      <Footer />
    </div>
  );
};

export default RecipeMore;
