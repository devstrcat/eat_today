import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import BookMarkBoard from "../components/meal/BookMarkBoard";
import { getBookMeal } from "../api/meal/meal_api";
import { useNavigate } from "react-router";

const BookMark = () => {
  // 기본 데이터
  const [data, setData] = useState([]);
  // 검색 저장
  const [searchText, setSearchText] = useState("");
  // page
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // 변수
  const storageSearchText = sessionStorage.getItem("searchText");
  const UseSearch = storageSearchText || searchText;

  // 검색 데이터 연동
  const handleClickGet = () => {
    getBookMeal(
      page,
      8,
      1,
      newData => {
        setData(prevData => [...prevData, ...newData]);
      },
      UseSearch, error500
    );
  };
  const resetClickGet = () => {
    getBookMeal(1, 8, 1, setData, error500);
  };

  const error500 = () => {
    navigate("/meal/bookmark")
  }

  // 검색 조건문
  const handleChange = event => {
    const value = event.target.value;

    const isValue =
      /^[ㄱ-ㅎ가-힣a-zA-Z#]([ㄱ-ㅎ가-힣a-zA-Z]*[^aeiouㄱ-ㅎ\s~`!@#$%^&*()-_=+[\]{}|;:'",.<>/?]*)?$/.test(
        value,
      );

    if (isValue || !value.trim()) {
      setSearchText(value);
      sessionStorage.setItem("searchText", value);
    }
  };

  // 검색 초기화
  const handleSearchReset = () => {
    if (!searchText.trim()) {
      handleHomeReset();
    } else {
      handleClickGet();
    }
  };
  const handleHomeReset = () => {
    setSearchText("");
    sessionStorage.setItem("searchText", "");
    resetClickGet();
  };

  // scroll 시 page가 +1
  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 1) {
      // 스크롤이 하단에 도달하면 페이지 번호를 증가시키고 데이터 가져오기
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  useEffect(() => {
    if (storageSearchText) {
      setSearchText(storageSearchText);
    }
    handleClickGet();
  }, [page, UseSearch]);

  return (
    <div>
      <Search
        searchText={searchText}
        handleChange={handleChange}
        handleSearchReset={handleSearchReset}
        setSearchText={setSearchText}
      ></Search>
      <main>
        <MealViewBt></MealViewBt>
        <BookMarkBoard data={data} />
      </main>
      <Footer handleHomeReset={handleHomeReset}></Footer>
    </div>
  );
};

export default BookMark;
