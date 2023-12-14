import React from "react";
import "../styles/more/recipemore.css";
import Footer from "../components/Footer";

const RecipeMore = () => {
  return (
    <div className="wrap">
      <header className="header">
        <div className="header-wrap">
          <div className="title">초코케이크</div>
          <div className="bt-wrap">
            <button className="edit"></button>
            <button className="trash"></button>
          </div>
        </div>
      </header>
      <div className="main-wrap">
        <img src="/images/chocolate.svg" className="img" />
        <ul className="hashtag">
          <li>#달달구리</li>
          <li className="hashtag_2">#초코케이크</li>
          <li>#스트로베리초코</li>
          <li className="hashtag_4">#베이킹원데이클래스</li>
        </ul>
        <div className="ingredient"></div>
        <div className="recipe"></div>
        <div className="comment"></div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeMore;
