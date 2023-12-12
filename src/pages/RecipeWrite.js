import React from "react";
import "../styles/recipewrite.css";

const RecipeWrite = () => {
  return (
    <div className="recipewrite">
      작성페이지
      <div className="wrap">
        {/* 상단 부분 */}
        <div className="header">
          <button className="cancelbutton">취소버튼</button>
          {/* 이미지 추가 */}
          <div className="addimages">
            <img className="addimages-box"></img>
          </div>
        </div>
        {/* 텍스트 박스 */}
        <div className="textboxes">
          <div className="textboxes-title">textboxes</div>
          <div className="textboxes-ingre">ingredient</div>
          <div className="textboxes-tags">
            해시태그
            <div className="textboxes-tags-add"></div>
          </div>
          <div className="textboxes-recipe">레시피</div>
          <div className="textboxes-comment">코멘트</div>
        </div>
        {/* 버튼 3가지 */}
        <div className="write-button">
          <button className="restart-bt"></button>
          <button className="complete-bt"></button>
          <button className="delete-bt"></button>
        </div>
      </div>
    </div>
  );
};

export default RecipeWrite;
