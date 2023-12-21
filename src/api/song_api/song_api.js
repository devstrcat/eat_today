import axios from "axios";

export const putMeal = async obj => {
  console.log("putMeal");
  try {
    const res = await axios.put("/api/meal", obj);
    console.log(res.data);
  } catch (error) {
    // 서버의 장애 발생
    console.log(error);
    alert("서버가 불안정합니다. 다시 시도해주세요.");
    // 가짜 테스트
  }
};

// 일지 작성 처리
// title: 제목(음식이름), ingredient: 식재료, recipe: 레시피, review: 후기,
// pics(배열): 일지 사진, tags(배열): 일지 태그

// (result(1): 성공, (0): 실패, (-1): 사진 없음, (-2): 사진 갯수 초과,
// (-3): 태그 갯수 초과, (-4): 입력받은 제목, 재료, 타이틀이 없습니다,
// (-5): 태그에 띄워쓰기와 특수문자가 있습니다, (-6): 비정상적인 사진 등록
// (-7): 비정상적인 태그 등록)
export const postMeal = async obj => {
  console.log("postMeal", obj);

  try {
    // http://112.222.157.156:5214/swagger.html
    // http://192.168.0.144:5214/api/meal

    const res = await axios.post("/api/meal", obj);
    console.log("일지전송 성공", res.data);
  } catch (error) {
    console.log(error);
    alert("서버 에러");
  }
};

export const deleteMealTag = async itag => {
  console.log("deleteMealTag", itag);
  try {
    const res = await axios.delete(`/api/meal/tag?itag=${itag}`);
    console.log(res.data);
    if (res.data === 0) {
      alert("삭제 실패");
      //
    } else if (res.data === 1) {
      alert("삭제 성공");
      //
    }
  } catch (error) {
    // 서버의 장애 발생
    console.log(error);
    alert("서버가 불안정합니다. 다시 시도해주세요.");
    // 가짜 테스트
  }
};

// (result(0): 실패, (1): 성공, (-1): 사진이 한 장이라서 삭제 불가,
// 해당 일지는 없는 일지 입니다)

export const deleteMealPic = async (imeal, ipic) => {
  console.log("deleteMealPic", " imeal=", imeal, " ipic=", ipic);
  try {
    //?imeal=0&ipic=0
    const res = await axios.delete(`/api/meal/pic?imeal=${imeal}&ipic=${ipic}`);
    console.log(res.data);
    if (res.data === 0) {
      alert("삭제 실패");
      //
    } else if (res.data === 1) {
      alert("삭제 성공");
      //
    } else if (res.data === -1) {
      alert("사진이 1장이라서 실패");
      //
    }
  } catch (error) {
    // 서버의 장애 발생
    console.log(error);
    alert("서버가 불안정합니다. 다시 시도해주세요.");
    // 가짜 테스트
  }
};

