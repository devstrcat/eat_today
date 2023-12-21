import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import MealSmall from "../components/meal/MealSmall";
import MealBig from "../components/meal/MealBig";
import { getMeal } from "../api/meal/meal_api";

const Index = () => {
  // 버튼 클릭 여부
  const [buttonClicked, setButtonClicked] = useState(false);
  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleClickGet = () => {
    getMeal(1, 200, 0, setData);
  };
  useEffect(() => {
    handleClickGet();
  }, []);

  // 검색 
  const handleSearch = searchText => {
    const formatSearchText = searchText.toLowerCase();

    const filterItems = data.filter(item => {
      // tags가 배열인 경우
      const isTagMatch = Array.isArray(item.tags)
        ? item.tags.some(tag => tag.toLowerCase().includes(formatSearchText))
        : false;

      // title이 문자열인지 확인
      const isTitleMatch =
        item.title &&
        typeof item.title === "string" &&
        item.title.toLowerCase().includes(formatSearchText);

      // 검색어와 일치하는 경우
      return isTagMatch || isTitleMatch;
    });

    setFilteredData(filterItems);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchText = e.target.searchTxt.value;
    handleSearch(searchText);
  };

  return (
    <div>
      <Search handleSubmit={handleSubmit}></Search>
      <main>
        <MealViewBt
          buttonClicked={buttonClicked}
          buttonClick={buttonClick}
        ></MealViewBt>
        {buttonClicked ? (
          <MealBig />
        ) : (
          <MealSmall data={filteredData.length > 0 ? filteredData : data} />
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
