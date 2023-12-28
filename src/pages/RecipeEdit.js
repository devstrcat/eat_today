import React, { useEffect, useState } from "react";
import {
  RecipeComment,
  RecipeWriteTop,
  RecipeWriteWrap,
  TextBoxHashTagsSong,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipeeditStyle";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getMoreSong, putMeal } from "../api/write/write_api";
import Edittags from "../components/write/Edittags";
import "../styles/write/addtags.css";
import {
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "../fb/firebaseconfig";
import AddImages from "../components/write/AddImages";

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
  const [uploadedImage, setUploadedImage] = useState(null);

  // 상세페이지(more) 불러온다.
  const param = useParams();
  const imeal = parseInt(param.imeal);

  const [moreData, setMoreData] = useState(initMoreData);

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
    if (pics === null) {
      alert("사진을 넣어주세요.");
      return;
    }
    if (review === "") {
      alert("comment를 작성하세요.");
      return;
    }

    const songTagsArr = songTags.filter(item => item !== "");

    const obj = {
      imeal: imeal,
      title: title,
      ingredient: ingredient,
      recipe: recipe,
      review: review,
      pics: pics,
      tags: songTagsArr,
    };
    putMeal(obj, successEdit);
  };

  // AddImages 컴포넌트로부터 이미지 업로드 후 주소를 받아오는 함수
  const handleImageUpload = async file => {
    const imageUrl = await uploadImageToStorage(file);

    // 기존 pics 배열과 중복을 방지하기 위해 이미지 주소가 없는 경우에만 추가
    if (!pics.includes(imageUrl)) {
      setPics(prevPics => [...prevPics, imageUrl]);
    }
    setUploadedImage(imageUrl);
  };

  // 이미지 업로드 로직
  const uploadImageToStorage = async file => {
    try {
      // Firebase Storage에 업로드할 경로 설정 (예시: images 폴더에 업로드)
      const storageRef = ref(storage, `images/${file.name}`);

      // 이미지를 Storage에 업로드하고 업로드 결과를 받아옴
      const fbRes = await uploadBytes(storageRef, file);

      // 업로드된 이미지의 다운로드 URL을 받아옴
      const imageUrl = await getDownloadURL(fbRes.ref);

      // 받아온 이미지 URL을 반환
      return imageUrl;
    } catch (error) {
      console.error(error);
      // 오류 처리 (예: 사용자에게 알림 등)
      throw error;
    }
  };

  const successEdit = () => {
    alert("수정이 완료되었습니다.");
    navigate("/meal");
  };

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

  useEffect(() => {
    // 최초 렌더링 시 실행
    getMoreSong(imeal, successMoreData, error500);
  }, [imeal]);

  const error500 = () => {
    navigate(`/meal/edit/${imeal}`);
  };

  return (
    <RecipeWriteWrap>
      <RecipeWriteTop>
        {/* 이미지 추가 */}
        <AddImages
          onImageUpload={(file, index) => handleImageUpload(file, index)}
          setPics={setPics}
          imageUrl={pics}
          previewImageUrls={moreData.pics}
        ></AddImages>
        {/* 텍스트 박스 */}
        <TextBoxes>
          <input
            className="textboxes-title"
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={e => handleChangeTitle(e)}
          ></input>
          <textarea
            className="textboxes-ingre"
            placeholder="재료를 입력해주세요."
            value={ingredient}
            onChange={e => handleChangeIngredient(e)}
          ></textarea>
          {/* 해시 태그 */}
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
