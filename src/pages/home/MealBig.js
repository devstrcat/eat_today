import React, { useState } from "react";

import Footer from "../../components/Footer";
import Search from "../../components/Search";
import NoticeBoard from "../../components/meal/NoticeBoard";



const MealBig = () => {
  return (
    <>
      <Search></Search>
      <main>
        <NoticeBoard></NoticeBoard>
      </main>
      <Footer></Footer>
    </>
  );
};

export default MealBig;
