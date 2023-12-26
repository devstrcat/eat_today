import React, { useEffect, useState } from "react";
import {
  AddImages,
  AddImagesLeft,
  AddImagesMid,
  AddImagesRight,
  RecipeComment,
  RecipeWriteTop,
  RecipeWriteWrap,
  TextBoxHashTags,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipeeditStyle";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { getMore } from "../api/more_api";
import { putMeal } from "../api/song_api/song_api";

// 서버에서 돌려주는 값
const initMoreData = {
  imeal: 0,
  title: "",
  review: "",
  createdAt: "",
  pics: [""],
  tags: [""],
  recipe: "",
  ingredient: "",
  bookMark: 0,
};

const RecipeEdit = () => {
  // 모으는 자료
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState("");
  const [review, setReview] = useState("");
  const [pics, setPics] = useState([]);
  const [tags, setTags] = useState([]);

  // 내용 업데이트 (내용 작성)
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleChangeIngredient = e => {
    setIngredient(e.target.value);
  };
  const handleChangeTags = e => {
    setTags([e.target.value]);
  };
  const handleChangeRecipe = e => {
    setRecipe(e.target.value);
  };
  const handleChangePics = e => {
    setPics([e.target.value]);
  };
  const handleChangeReview = e => {
    setReview(e.target.value);
  };

  // 내용 재 작성 (리셋 기능)
  const handelClickReset = () => {
    setTitle("");
    setIngredient("");
    setTags("");
    setRecipe("");
    setPics("");
    setReview("");
  };
  // 내용 서버전송
  // 비어있는지를 체크하여 빈 경우에는 경고를 표시하고
  // 폼의 제출을 막을 수 있다.
  const handelClickSubmit = () => {
    if (title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (ingredient === "") {
      alert("재료를 입력하세요.");
      return;
    }
    if (tags === "") {
      alert("#해시태그를 입력하세요.");
      return;
    }
    if (recipe === "") {
      alert("레시피를 입력하세요.");
    }
    if (pics === "") {
      alert("");
      return;
    }
    if (review === "") {
      alert("comment를 작성하세요.");
      return;
    }

    const obj = {
      title: title,
      ingredient: ingredient,
      recipe: recipe,
      review: review,
      pics: ["임시사진.jpg"],
      tags: ["tags"], //배열만
    };
    putMeal(obj);
  };

  // 상세페이지(more) 불러온다.
  const param = useParams();
  const imeal = parseInt(param.imeal);

  const [moreData, setMoreData] = useState(initMoreData);

  // 데이터를 한번 호출한다.
  useEffect(() => {
    getMore(imeal, setMoreData);
  }, []);

  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
        {/* 이미지 추가 */}
        <AddImages>
          <AddImagesLeft>
            <img
              src={moreData.pics[0]}
              alt=""
              onChange={handleChangePics}
            />
          </AddImagesLeft>
          <AddImagesMid>
            <img src={moreData.pics[1]} alt="" />
          </AddImagesMid>
          <AddImagesRight>
            <img src={moreData.pics[2]} alt="" />
          </AddImagesRight>
        </AddImages>

        {/* 텍스트 박스 */}
        <TextBoxes>
          <input
            className="textboxes-title"
            placeholder="제목을 입력해주세요."
            value={moreData.title}
            onChange={handleChangeTitle}
          ></input>
          <input
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
            value={moreData.ingredient}
            onChange={handleChangeIngredient}
          ></input>

          {/* 해시 태그 */}
          <TextBoxHashTags>
            {moreData.tags &&
              moreData.tags.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </TextBoxHashTags>

          {/* 레시피 기록 및 다이어리 코멘트 */}
          <RecipeComment>
            <input
              className="textboxes-recipe"
              placeholder="Recipe"
              value={moreData.recipe}
              onChange={handleChangeRecipe}
            />
            <input
              className="textboxes-comment"
              placeholder="Diary comment..."
              value={moreData.comment}
              onChange={handleChangeReview}
            />
          </RecipeComment>
        </TextBoxes>

        {/* 버튼 3가지 */}
        <WriteButtons>
          <div className="restart-bt">
            <img src="/images/write/reset_icon.png" alt=""        onClick={e => {
                handelClickReset(e);
              }}/>
          </div>
          <div className="complete-bt">
            <img src="/images/write/check_icon.svg" alt="" 
                  onClick={e => {
                    handelClickSubmit(e);
                  }}/>
          </div>
        </WriteButtons>

        <Footer></Footer>
      </RecipeWriteTop>
    </RecipeWriteWrap>
  );
};

export default RecipeEdit;
