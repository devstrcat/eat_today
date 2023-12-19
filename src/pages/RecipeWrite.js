import React, { useEffect, useState } from "react";

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
} from "../styles/recipewriteStyle";
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
        <CancelButton>
          <CancelButtonIcon>
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

      ))}
    </div>
   
);





  // return (
  //   <RecipeWriteWrap>
  //     <RecipeWriteTop>
  //       {/* 상단 취소 버튼 */}
  //       <CancelButton>
  //         <CancelButtonIcon>
  //           <img src="/images/cancel_icon.svg" />
  //         </CancelButtonIcon>
  //       </CancelButton>
  //       {/* 이미지 추가 */}
  //       <AddImages>
  //         <AddImagesLeft>
  //           <img src="/images/choco.png" />
  //         </AddImagesLeft>
  //         <AddImagesMid>
  //           <img src="/images/add_icon.svg" />
  //         </AddImagesMid>
  //         <AddImagesRight>
  //           <img src="/images/add_icon.svg" />
  //         </AddImagesRight>
  //       </AddImages>

  //       {/* 텍스트 박스 */}
  //       <TextBoxes>
  //         <input
  //           className="textboxes-title"
  //           placeholder="제목을 입력해주세요."
  //         ></input>
  //         <input
  //           className="textboxes-ingre"
  //           placeholder="재료를 입력해주세요."
  //         ></input>

  //         {/* 해시 태그 */}

  //         <TextBoxHashTags>
  //           <input
  //             type="text"
  //             className="textboxes-tags-left"
  //             placeholder="#해시태그를 넣어주세요."
  //           ></input>

  //           <input
  //             type="text"
  //             className="textboxes-tags-mid"
  //             placeholder="#해시태그를 넣어주세요."
  //           ></input>
  //           <div className="textboxes-tags-right">
  //             <img src="/images/add_icon.svg" />
  //           </div>
  //         </TextBoxHashTags>

  //         {/* 레시피 기록 및 다이어리 코멘트 */}
  //         <RecipeComment>
  //           <input className="textboxes-recipe" placeholder="Recipe" />
  //           <input
  //             className="textboxes-comment"
  //             placeholder="Diary comment..."
  //           />
  //         </RecipeComment>
  //       </TextBoxes>

  //       {/* 버튼 3가지 */}
  //       <WriteButtons>
  //         <div className="restart-bt">
  //           <img src="/images/reset_icon.png" />
  //         </div>
  //         <div className="complete-bt">
  //           <img src="/images/check_icon.svg" />
  //         </div>
  //       </WriteButtons>

  //       <Footer></Footer>
  //     </RecipeWriteTop>
  //   </RecipeWriteWrap>
  // );
};

export default RecipeWrite;
