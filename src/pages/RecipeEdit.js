import React from "react";
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
} from "../styles/write/recipeeditStyle";
import Footer from "../components/Footer";

const RecipeEdit = () => {
  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
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
              type="text"
              className="textboxes-tags-left"
              placeholder="#해시태그를 넣어주세요."
            ></input>

            <input
              type="text"
              className="textboxes-tags-mid"
              placeholder="#해시태그를 넣어주세요."
            ></input>
            <div className="textboxes-tags-right">
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

export default RecipeEdit;
