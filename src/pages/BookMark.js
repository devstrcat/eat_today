import React from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import MealSmall from "../components/meal/MealSmall";

const BookMark = () => {

  return (
    <div>
      <Search></Search>
      <main>
        <MealViewBt></MealViewBt>
        <MealSmall BookMarkShow={1}/>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default BookMark;