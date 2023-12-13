import React from "react";
import "../styles/recipewrite.css";
import Footer from "../components/Footer";

const RecipeWrite = () => {
  return (
    <div className="recipewrite">
      <div className="wrap">
        {/* 상단 취소 버튼 */}
        <div className="cancelbutton">
          <div className="cancelbutton-icon">
            <img src="/images/cancel_icon.svg" />
          </div>
        </div>
        {/* 이미지 추가 */}
        <div className="addimages">
          <div className="addimages-img">
            <img src="/images/cake_small.jpg" />
          </div>
          <div className="addimages-icon-sec"></div>
          <div className="addimages-icon-thr"></div>
        </div>

        {/* 텍스트 박스 */}
        <div className="textboxes">
          <input
            className="textboxes-title"
            placeholder="제목을 입력해주세요."
          ></input>
          <input
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
          ></input>
          {/* 해시 태그 */}
          <div className="textboxes-hashtags">
            <input className="textboxes-tags-add" placeholder="#"></input>
          </div>
          <input className="textboxes-recipe" placeholder="Recipe" />
          <input className="textboxes-comment" placeholder="Diary comment..." />
        </div>
        {/* 버튼 3가지 */}
        <div className="write-button">
          <div className="restart-bt">
         
          </div>
          <div className="complete-bt">
      
          </div>
          <div className="delete-bt">
        
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RecipeWrite;
