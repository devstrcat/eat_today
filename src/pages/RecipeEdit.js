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
  TextBoxHashTagsSong,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipeeditStyle";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getMore } from "../api/more_api";
import { getMoreSong, putMeal } from "../api/song_api/song_api";
import AddTags from "../components/write/Addtags";
import Edittags from "../components/write/Edittags";

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
  const navigate = useNavigate();
  // 모으는 자료
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState("");
  const [review, setReview] = useState("");
  const [pics, setPics] = useState([]);
  const [songTags, setSongTags] = useState([]);

  // 상세페이지(more) 불러온다.
  const param = useParams();
  const imeal = parseInt(param.imeal);

  const [moreData, setMoreData] = useState(initMoreData);

  // 사진 내용 업데이트
  const handleChangePics = e => {
    setPics([e.target.value]);
  };

  // 태그 업데이트
  const handleChangeTags = updatedTags => {
    // 무한루프
    // setTags([updatedTags]);
  };
  // 내용 업데이트 (내용 작성)
  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleChangeIngredient = e => {
    setIngredient(e.target.value);
  };

  const handleChangeRecipe = e => {
    setRecipe(e.target.value);
  };
  const handleChangeReview = e => {
    setReview(e.target.value);
  };

  // 내용 재 작성 (리셋 기능)
  const handelClickReset = () => {
    console.log("리셋입니다.");
    setTitle(moreData.title);
    setIngredient(moreData.ingredient);
    setRecipe(moreData.recipe);
    setPics(moreData.pics);
    setReview(moreData.review);

    // 태그 기본값 리셋
    makeTags(moreData.tags);
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

    const songTagsResult = songTags.filter(item => item === "");
    if (songTagsResult.length == 5) {
      alert("#해시태그는 최소 1개 이상을 입력하세요.");
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

    // console.log(songTags);

    const obj = {
      imeal: imeal,
      title: title,
      ingredient: ingredient,
      recipe: recipe,
      review: review,
      picIdx: [0, 1],
      pics: pics,
      tagIdx: [0, 1, 2, 3, 4],
      tags: songTags,
    };
    console.log("보낼 데이터 : ", obj);
    putMeal(obj, successEdit);
  };

  const successEdit = () => {
    alert("수정이 완료되었습니다.");
    navigate("/meal");
  };

  useEffect(() => {
    // 최초 렌더링 시 실행
    getMoreSong(imeal, successMoreData);
  }, []);

  const successMoreData = _data => {
    // setMoreData, setTags
    // alert("가져와요.");
    setMoreData(_data);

    setTitle(_data.title);
    setIngredient(_data.ingredient);
    // setTags(_data.tags);
    setRecipe(_data.recipe);
    setPics(_data.pics);
    setReview(_data.review);

    // 태그 정리
    makeTags(_data.tags);
  };

  const makeTags = _tag => {
    let arr = ["", "", "", "", ""];
    for (let i = 0; i < _tag.length; i++) {
      arr[i] = _tag[i];
    }
    setSongTags(arr);
  };

  const changeTags = (_index, _tagTxt) => {
    // console.log(_index, _tagTxt);
    const arr = [...songTags];
    arr[_index] = _tagTxt;
    console.log(arr);
    setSongTags(arr);
  };

  const makeTagsHTML = () => {
    return songTags.map((item, index) => (
      <Edittags
        key={index}
        item={item}
        itemIndex={index}
        changeTags={changeTags}
      ></Edittags>
    ));
  };

  // useEffect(() => {
  //   // 데이터가 바뀌면
  //   const tagsArr = moreData.tags;
  //   console.log("무한루프될까?", tagsArr);
  //   setTags(tagsArr);
  // }, [moreData]);

  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
        {/* 이미지 추가 */}
        <AddImages>
          <AddImagesLeft>
            <img
              src={moreData.pics[0]}
              alt=""
              onChange={e => handleChangePics(e)}
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
            value={title}
            onChange={e => handleChangeTitle(e)}
          ></input>
          <input
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
            value={ingredient}
            onChange={e => handleChangeIngredient(e)}
          ></input>

          {/* 해시 태그 */}
          {/* <AddTags onTagsUpdate={} tags={tags}></AddTags> */}
          <TextBoxHashTagsSong>
            {songTags.map((item, index) => (
              <Edittags
                key={index}
                item={item}
                itemIndex={index}
                changeTags={changeTags}
              ></Edittags>
            ))}
          </TextBoxHashTagsSong>

          {/* 레시피 기록 및 다이어리 코멘트 */}
          <RecipeComment>
            <textarea
              className="textboxes-recipe"
              placeholder="Recipe"
              value={recipe}
              onChange={e => handleChangeRecipe(e)}
            ></textarea>
            <textarea
              className="textboxes-comment"
              placeholder="Diary comment..."
              value={review}
              onChange={e => handleChangeReview(e)}
            ></textarea>
          </RecipeComment>
        </TextBoxes>

        {/* 버튼 3가지 */}
        <WriteButtons>
          <div className="restart-bt">
            <img
              src="/images/write/reset_icon.png"
              alt=""
              onClick={e => {
                handelClickReset(e);
              }}
            />
          </div>
          <div className="complete-bt">
            <img
              src="/images/write/check_icon.svg"
              alt=""
              onClick={e => {
                handelClickSubmit(e);
              }}
            />
          </div>
        </WriteButtons>

        <Footer></Footer>
      </RecipeWriteTop>
    </RecipeWriteWrap>
  );
};

export default RecipeEdit;
