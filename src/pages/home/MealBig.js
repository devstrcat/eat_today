import React, { useState } from "react";

import Footer from "../../components/Footer";
import Search from "../../components/Search";
import NoticeBoard1 from "../../components/meal/NoticeBoard";



const MealBig = () => {
  return (
    <>
      <Search></Search>
      <main>
        <NoticeBoard1></NoticeBoard1>
      </main>
      <Footer></Footer>
    </>
  );
};

export default MealBig;
