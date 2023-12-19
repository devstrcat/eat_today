import React from "react";
import Footer from "../components/Footer";
import {
  AddImages,
  AddImagesLeft,
  AddImagesMid,
  AddImagesRight,
  CancelButton,
  CancelButtonIcon,
  RecipeComment,
  RecipeWriteTop,
  RecipeWriteWrap,
  TextBoxHashTags,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipewriteStyle";
import { useNavigate } from "react-router";

const RecipeWrite = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    // 뒤로 이동
    navigate(-1);
  };

  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
        {/* 상단 취소 버튼 */}
        <CancelButton>
          <CancelButtonIcon onClick={handleClickBack}>
            <img src="/images/cancel_icon.svg" />
          </CancelButtonIcon>
        </CancelButton>
        {/* 이미지 추가 */}
        <AddImages>
          <AddImagesLeft>
            <img src="/images/choco.png" />
          </AddImagesLeft>
          <AddImagesMid>
            <img src="/images/add_icon.svg" />
          </AddImagesMid>
          <AddImagesRight>
            <img src="/images/add_icon.svg" />
          </AddImagesRight>
        </AddImages>

        {/* 텍스트 박스 */}
        <TextBoxes>
          <input
            className="textboxes-title"
            placeholder="제목을 입력해주세요."
          ></input>
          <input
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
          ></input>

          {/* 해시 태그 */}
          <TextBoxHashTags>
            <input
              className="textboxes-tags-today"
              placeholder="#오늘의디저트"
            ></input>
            <input
              className="textboxes-tags-chococake"
              placeholder="#크리스마스초코케익"
            ></input>
            <div className="textboxes-tags-add">
              <img src="/images/add_icon.svg" />
            </div>
          </TextBoxHashTags>

          {/* 레시피 기록 및 다이어리 코멘트 */}
          <RecipeComment>
            <input className="textboxes-recipe" placeholder="Recipe" />
            <input
              className="textboxes-comment"
              placeholder="Diary comment..."
            />
          </RecipeComment>
        </TextBoxes>

        {/* 버튼 3가지 */}
        <WriteButtons>
          <div className="restart-bt">
            <img src="/images/reset_icon.png" />
          </div>
          <div className="complete-bt">
            <img src="/images/check_icon.svg" />
          </div>
        </WriteButtons>

        <Footer></Footer>
      </RecipeWriteTop>
    </RecipeWriteWrap>
  );
};

export default RecipeWrite;
