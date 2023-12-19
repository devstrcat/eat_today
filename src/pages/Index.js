import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import MealSmall from "../components/meal/MealSmall";
import MealBig from "../components/meal/MealBig";
import { getMeal } from "../api/meal/meal_api";

const Index = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [buttonClicked, setButtonClicked] = useState(false);
  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleClickGet = () => {
    getMeal(1, 10, 0, setData);
  }
  useEffect(() => {
    handleClickGet();
  }, []);

  const handleSearch = (searchText) => {
    const filteredItems = data.filter((item) => {
      // title이 문자열인지 확인합니다.
      const isTitleMatch =
        item.title &&
        typeof item.title === 'string' &&
        item.title.toLowerCase().includes(searchText.toLowerCase());
  
      // 검색어와 일치하는 경우를 필터링합니다.
      return isTitleMatch;
    });
  
    setFilteredData(filteredItems);
  };
  

  const handleSubmit = (e) => {
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
        {buttonClicked ? <MealBig /> : <MealSmall data={filteredData.length > 0 ? filteredData : data}/>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
