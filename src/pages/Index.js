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
  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  // 기본 데이터
  const [data, setData] = useState([]);
  // 검색어 저장
  const [searchText, setSearchText] = useState("");

  const handleClickGet = () => {
    const storedSearchText = localStorage.getItem("searchText");
    const termToUse = storedSearchText || searchText;
    getMeal(1, 20, 0, setData, termToUse);
  };

  const resetClickGet = () => {
    getMeal(1, 20, 0, setData);
  };

  useEffect(() => {
    const storedSearchText = localStorage.getItem("searchText");
    if (storedSearchText) {
      setSearchText(storedSearchText);
    }

    handleClickGet();
  }, []);

  const handleSearchInputChange = event => {
    const value = event.target.value;
    setSearchText(value);
    localStorage.setItem("searchText", value);
  };

  const handleSearchButtonClick = () => {
    if (searchText.trim() === "") {
      // 검색어가 비어있을 때 처리
      handleHomeButtonClick();
    } else {
      handleClickGet();
    }
  };

  const handleHomeButtonClick = () => {
    setSearchText("");
    localStorage.setItem("searchText", "");
    resetClickGet(); // setData를 빈 배열로 업데이트
  };

  return (
    <div>
      <Search
        searchText={searchText}
        onInputChange={handleSearchInputChange}
        onButtonClick={handleSearchButtonClick}
      ></Search>
      <main>
        <MealViewBt
          buttonClicked={buttonClicked}
          buttonClick={buttonClick}
        ></MealViewBt>
        {buttonClicked ? <MealBig data={data} /> : <MealSmall data={data} />}
      </main>
      <Footer onHomeButtonClick={handleHomeButtonClick}></Footer>
    </div>
  );
};

export default Index;
