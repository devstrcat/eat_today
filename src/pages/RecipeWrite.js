import React from "react";
import Footer from "../components/Footer";
import {
  RecipeComment,
  RecipeWriteTop,
  RecipeWriteWrap,
  TextBoxHashTags,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipewriteStyle";

import CancelButton from "../components/write/CancelButton";
import AddImages from "../components/write/AddImages";

const RecipeWrite = () => {
  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
        {/* 상단 취소 버튼 */}
        <CancelButton></CancelButton>
        {/* 텍스트 박스 */}
        <TextBoxes>
          {/* 이미지 추가 */}
          <AddImages></AddImages>
          <input
            className="textboxes-title"
            placeholder="제목을 입력해주세요."
          ></input>
          <textarea
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
          ></textarea>
          {/* 해시 태그 */}
          <TextBoxHashTags>
            <input
              className="textboxes-tags-today"
              placeholder="#오늘의디저트"
            ></input>
            <input
              className="textboxes-tags-today"
              placeholder="#크리스마스초코케익"
            ></input>
            <div className="textboxes-tags-add">
              <img src="/images/add_icon.svg" />
            </div>
          </TextBoxHashTags>

          {/* 레시피 기록 및 다이어리 코멘트 */}
          <RecipeComment>
            <textarea className="textboxes-recipe" placeholder="Recipe" />
            <textarea
              className="textboxes-comment"
              placeholder="Diary comment..."
            />
          </RecipeComment>
          {/* 버튼 3가지 */}
          <WriteButtons>
            <button type="reset" className="restart-bt">
              <img src="/images/reset_icon.png" />
            </button>
            <button type="submit" className="complete-bt">
              <img src="/images/check_icon.svg" />
            </button>
          </WriteButtons>
        </TextBoxes>
        <Footer></Footer>
      </RecipeWriteTop>
    </RecipeWriteWrap>
  );
};

export default RecipeWrite;
