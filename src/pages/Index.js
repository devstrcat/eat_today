import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import MealSmall from "../components/meal/MealSmall";
import MealBig from "../components/meal/MealBig";
import { getMeal } from "../api/meal/meal_api";

const Index = () => {
  // button
  const [buttonClicked, setButtonClicked] = useState(false);
  // 기본 데이터
  const [data, setData] = useState([]);
  // 검색 저장
  const [searchText, setSearchText] = useState("");

  // 버튼
  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  // 변수
  const storageSearchText = sessionStorage.getItem("searchText");
  const UseSearch = storageSearchText || searchText;

  // 검색 데이터 연동
  const handleClickGet = () => {
    getMeal(1, 50, 0, setData, UseSearch);
  };
  const resetClickGet = () => {
    getMeal(1, 20, 0, setData);
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
        <MealViewBt
          buttonClicked={buttonClicked}
          buttonClick={buttonClick}
        ></MealViewBt>
        {buttonClicked ? <MealBig data={data} /> : <MealSmall data={data} />}
      </main>
      <Footer handleHomeReset={handleHomeReset}></Footer>
    </div>
  );
};

export default Index;
