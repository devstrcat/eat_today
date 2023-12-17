import React, { useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import MealSmall from "../components/meal/MealSmall";
import MealBig from "../components/meal/MealBig";
import { BookMarkIcon } from "../styles/meal/noticeboardsmall";

const Index = () => {
  // 상태를 사용하여 버튼 클릭 여부를 추적
  const [buttonClicked, setButtonClicked] = useState(false);
  const buttonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <Search></Search>
      <main>
        <MealViewBt
          buttonClicked={buttonClicked}
          buttonClick={buttonClick}
        ></MealViewBt>
        {buttonClicked ? <MealBig /> : <MealSmall BookMarkShow={0}/>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Index;
