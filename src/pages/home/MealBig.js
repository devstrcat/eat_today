import React from "react";
import "../../styles/mealbig.css";

const MealBig = () => {
  return (
    <>
      {/* <header className="header">검색창</header>
      <div className="meal_button">
        <button className="meal_big">한장보기</button>
        <button className="meal_small">낱장보기</button>
      </div> */}
      <div className="details">
        <div className="bulletinbox">
          <h4 className="bulletinbox-title">
            <input></input>
          </h4>
          <div className="bulletinbox-picture">
            <img src="/images/choco.png" alt="사진을 넣어주세요" />
          </div>
          <div className="bulletinbox-hashtag">
            <span># 초콜릿</span>
            <span># 테그</span>
            <span># 힘들다</span>
            <span># 난 뭐했니</span>
            <span># 하앙 집갈레</span>

      
          </div>
          <textarea
            className="derail"
            type="text"
            maxLength="1000"
            placeholder="여기에 적으세요."
            autoFocus
          ></textarea>
        </div>
      </div>
      {/* <footer>
        <div>
          <button className="home"></button>
          <button className="write"></button>
          <button className="book-mark"></button>
          <button className="seach"></button>
        </div>
      </footer> */}
    </>
  );
};

export default MealBig;
