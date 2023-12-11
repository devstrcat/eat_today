import React from "react";

const MealBig = () => {
  return (
    <div className="wart">
      <header className="header">검색창</header>
      <div className="meal_button">
        <button className="meal_big">한장보기</button>
        <button className="meal_small">낱장보기</button>
      </div>
      <main className="main">
        <div className="bulletin">1장</div>
        <div className="bulletin">2장</div>
        <div className="bulletin">3장</div>
        <div className="bulletin">4장</div>
      </main>
      <footer>
        <div>
          <button className="home"></button>
          <button className="write"></button>
          <button className="book-mark"></button>
          <button className="seach"></button>
        </div>
      </footer>
    </div>
  );
};

export default MealBig;
