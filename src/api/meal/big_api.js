import axios from "axios";

export const getMleal = async (
  page,
  row_conut,
  bookmark,
  search,
  setMealData,
) => {
  try {
    const response = await axios.get(
      `/api/meal?page=${page}&row_count=${row_conut}&bookmark=${bookmark}&search=${search} `,
    );
    //상태체크하기
    const situation = response.status.toString();

    if (situation.charAt(0) === "2") {
      //정상 처리
      setMealData(response.data);
    } else if (situation.situation(0) === "4") {
      //클라이언트(리엑트)에서 값의 종류 및 단어가 잘못 기재된 경우
      alert(
        " 존재하지 않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다 ",
      );
    }
  } catch (error) {
    console.log(error);
    alert("서버 데이터가 불안전합니다.");
    setMealData([
      {
        imeal: 198,
        title: "string",
        review: "string",
        createdAt: "2023-12-18 15:22:36",
        pics: ["string"],
        tags: ["string"],
        result: 1,
      },
      {
        imeal: 197,
        title: "1번 음식",
        review: "쉽고 맛있었다.",
        createdAt: "2023-12-18 15:10:03",
        pics: ["   "],
        tags: ["ff"],
        result: 1,
      },
      {
        imeal: 196,
        title: "1번 음식",
        review: "쉽고 맛있었다.",
        createdAt: "2023-12-18 15:07:44",
        pics: ["   "],
        tags: [""],
        result: 1,
      },
      {
        imeal: 195,
        title: "1번 음식",
        review: "쉽고 맛있었다.",
        createdAt: "2023-12-18 15:00:29",
        pics: ["음식 완성 후.jpg", "플레이팅.jpg"],
        tags: [""],
        result: 1,
      },
    ]);
  }
};
