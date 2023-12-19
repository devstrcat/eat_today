import React, { useEffect, useState } from "react";
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
import { postWrite } from "../api/write/write_api";

const initData = [];

const RecipeWrite = () => {
  // 목록 Post
  const [writeData, setWriteData] = useState(initData);

  // 한번 호출한다.
  useEffect(() => {
    postWrite(setWriteData);
  });
  return (
    <div>
      {writeData.map(item => (
        <RecipeWriteWrap key={item.title}>
          <RecipeWriteTop>
            {/* 상단 취소 버튼 */}
            <CancelButton></CancelButton>
            {/* 이미지 추가 */}
            <AddImages></AddImages>
            {/* 텍스트 박스 */}
            <TextBoxes>
              <input
                className="textboxes-title"
                placeholder={item.title}
              ></input>
              <input
                className="textboxes-ingre"
                placeholder={item.ingredient}
              ></input>

              {/* 해시 태그 */}

              <TextBoxHashTags>
                <input
                  type="text"
                  className="textboxes-tags-left"
                  placeholder={item.tags[0]}
                ></input>

                <input
                  type="text"
                  className="textboxes-tags-mid"
                  placeholder={item.tags[1]}
                ></input>
                <div className="textboxes-tags-right">
                  <img src={item.pics[4]} />
                </div>
              </TextBoxHashTags>

              {/* 레시피 기록 및 다이어리 코멘트 */}
              <RecipeComment>
                <input className="textboxes-recipe" placeholder={item.recipe} />
                <input
                  className="textboxes-comment"
                  placeholder={item.review}
                />
              </RecipeComment>
            </TextBoxes>
            {/* 버튼 3가지 */}
            <WriteButtons>
              <button type="reset" className="restart-bt">
                <img src="/images//write/reset_icon.png" />
              </button>
              <button type="submit" className="complete-bt">
                <img src="/images/write/check_icon.svg" />
              </button>
            </WriteButtons>
            <Footer></Footer>
          </RecipeWriteTop>
        </RecipeWriteWrap>
      ))}
    </div>
  );
};

export default RecipeWrite;
