import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  RecipeComment,
  RecipeWriteTop,
  RecipeWriteWrap,
  TextBoxes,
  WriteButtons,
} from "../styles/write/recipewriteStyle";
import AddImages from "../components/write/AddImages";
import { postMeal } from "../api/song_api/song_api";
import {
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "../fb/firebaseconfig";

const initData = {
  title: "",
  ingredient: "",
  recipe: "",
  review: "",
  pics: [],
  tags: [""],
};
const RecipeWrite = () => {
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
  const handleChangeRecipe = e => {
    setRecipe(e.target.value);
  };
  const handleChangeReview = e => {
    setReview(e.target.value);
  };

  // 이미지 주소를 저장할 state
  const [uploadedImage, setUploadedImage] = useState(null);

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
      console.error("Error uploading image:", error);
      // 오류 처리 (예: 사용자에게 알림 등)
      throw error;
    }
  };

  // 내용 재 작성 (리셋 기능)
  const handelClickReset = () => {
    setTitle("");
    setIngredient("");
    setTags("");
    setRecipe("");
    setPics([]);
    setReview("");
  };
  // 내용 서버전송
  // 비어있는지를 체크하여 빈 경우에는 경고를 표시하고
  // 폼의 제출을 막을 수 있다.
  const handelClickSubmit = async () => {
    if (title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (ingredient === "") {
      alert("재료를 입력하세요.");
      return;
    }
    // if (tags.length === 0 || tags[0] === "") {
    //   alert("태그를 입력하세요.");
    //   return;
    // }
    if (recipe === "") {
      alert("레시피를 입력하세요.");
    }
    if (uploadedImage === null) {
      alert("사진을 넣어주세요.");
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
      pics: pics,
      tags: tags, //배열만
    };
    postMeal(obj);
  };
  // 한번 호출한다.
  useEffect(() => {
    console.log(pics);
  }, [pics]);

  return (
    <div>
      <RecipeWriteWrap>
        <RecipeWriteTop>
          {/* 이미지 추가 */}
          <AddImages
            onImageUpload={(file, index) => handleImageUpload(file, index)}
            setPics={setPics} imageUrl={pics}
          ></AddImages>
          {/* 텍스트 박스 */}
          <TextBoxes>
            <input
              className="textboxes-title"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => handleChangeTitle(e)}
            />
            <input
              className="textboxes-ingre"
              placeholder="재료를 입력하세요."
              value={ingredient}
              onChange={e => handleChangeIngredient(e)}
            />
            {/* 해시 태그 */}
            {/* 레시피 기록 및 다이어리 코멘트 */}
            <RecipeComment>
              <input
                className="textboxes-recipe"
                placeholder="레시피를 입력하세요."
                value={recipe}
                onChange={e => handleChangeRecipe(e)}
              />
              <input
                className="textboxes-comment"
                placeholder="comment를 작성하세요."
                value={review}
                onChange={e => handleChangeReview(e)}
              />
            </RecipeComment>
          </TextBoxes>
          {/* 버튼 2가지 */}
          <WriteButtons>
            <button
              type="reset"
              className="restart-bt"
              onClick={e => {
                handelClickReset(e);
              }}
            >
              <img src="/images/write/reset_icon.png" alt="" />
            </button>
            <button
              type="button"
              className="complete-bt"
              onClick={e => {
                handelClickSubmit(e);
              }}
            >
              <img src="/images/write/check_icon.svg" alt="" />
            </button>
          </WriteButtons>
          <Footer></Footer>
        </RecipeWriteTop>
      </RecipeWriteWrap>
    </div>
  );
};

export default RecipeWrite;
