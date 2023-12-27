import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import BookMarkBoard from "../components/meal/BookMarkBoard";
import { getBookMeal, getMeal } from "../api/meal/meal_api";

const BookMark = () => {
  // 기본 데이터
  const [data, setData] = useState([]);
  // 검색 저장
  const [searchText, setSearchText] = useState("");

  // 변수
  const storageSearchText = sessionStorage.getItem("searchText");
  const UseSearch = storageSearchText || searchText;

  // 검색 데이터 연동
  const handleClickGet = () => {
    getBookMeal(1, 4, 1, setData, UseSearch);
  };
  const resetClickGet = () => {
    getBookMeal(1, 4, 1, setData);
  };

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

  useEffect(() => {
    if (storageSearchText) {
      setSearchText(storageSearchText);
    }
    handleClickGet();
  }, []);

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
