import axios from "axios";

// 일지 수정 처리
// imeal: 일지pk, title: 제목(음식 이름), ingredient: 재료, recipe: 레시피, review: 후기
// picIdx: 사진 인덱스번호(List), pics: 바꾸고 싶은 사진(List),
// tagIdx: 태그 인덱스번호(List), tags: 바꾸고 싶은 태그(List)
// (result(-4): 입력받은 제목, 재료, 타이틀이 없습니다, (0): 실패, (1): 성공)


// 수정페이지에 내용(상세페이지) 가져오기
export const fetchMeal = async () => {
  console.log("getEdit")
  try {
    const res = await fetch("/api/meal/{imeal}")
    const data = await res.json()
    console.log(res.data)
  } catch (error) {
    console.log(error)
    alert(
      " 존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다 ",
    );
    fetchMeal()
  }
}

// 수정 페이지 (put)
export const putMeal = async (obj) => {
  console.log("putMeal");
  try {
    const res = await axios.fetch("/api/meal", obj);
    console.log(res.data);
    //상태체크하기
    const situation = res.status.toString();
    if (situation.charAt(0) === "2") {
      //정상 처리
    } else if (situation.situation(0) === "4") {
      alert(" 존재하지 않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다 ");
    }
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

// 작성 페이지 (post)
export const postMeal = async (obj) => {
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

export const deleteMealTag = async (itag) => {
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

