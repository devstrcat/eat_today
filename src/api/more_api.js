import axios from "axios";

export const getMore = async (imeal, setMoreData) => {
  try {
    const url = `/api/meal/${imeal}`;
    const res = await axios.get(url);
    setMoreData(res.data);
  } catch (error) {
    console.log(error);
    alert(
        " 존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다 ",
      );

    // 오류시 작업할 fake 데이터
    setMoreData({
      imeal: 30,
      title: "스파게티",
      review: "맛있었다",
      createdAt: "2023-12-14 12:54:00",
      pics: [
        "https://i.namu.wiki/i/lr2V-3TTyfhyeRB7Ovhi9CSfxAOOHwfXxei63rf9udC8vJwbOevFk6jGr8wRpHwaUcqfpgGEpTO781442-VLTSxMcE0xkP7somI7myWLY3-Gwt1PbkhN9ZIWGWOexofkIQJaBgP3MtJvlKFJBONDSA.webp",
      ],
      tags: ["string"],
      recipe: "삶기",
      ingredient: "면",
      bookMark: 0,
    });
  }
};

export const deleteMore = async (imeal, setMoreData) => {
  console.log("imeal=", imeal);
  try {
    const url = `/api/meal?imeal=${imeal}`;
    const res = await axios.delete(url);
    setMoreData(res.data);
    console.log("데이터 삭제 성공");
  } catch (error) {
    console.log(error);
    alert(
      " 2 존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다 ",
    );
  }
};
