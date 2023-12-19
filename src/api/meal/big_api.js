import axios from "axios";

export const getMleal = async setMealData => {
  try {
    const response = await axios.get("/api/meal?page=1&row_count=4&bookmark=0");
    setMealData(response.data);
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
