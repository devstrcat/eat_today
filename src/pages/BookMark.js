import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Footer from "../components/Footer";
import MealViewBt from "../components/meal/MealViewBt";
import BookMarkBoard from "../components/meal/BookMarkBoard";
import { getMeal } from "../api/meal/meal_api";

const BookMark = () => {
 
  const [data, setData] = useState([]);

  const handleClickGet = () => {
    getMeal(1, 10, 0, setData);
  }
  useEffect(() => {
    handleClickGet();
  }, []);

  return (
    <div>
      <Search></Search>
      <main>
        <MealViewBt></MealViewBt>
        <BookMarkBoard data={data}/>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default BookMark;