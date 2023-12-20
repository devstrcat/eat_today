import axios from "axios";
import { SERVER_URL } from "../config";

// 내용 가져오기
export const getMeal = async (
  page,
  row_count,
  boomark,
  fn,
  searchText = "",
) => {
  try {
    // 검색어가 있을 경우 검색어를 쿼리에 추가
    const searchQuery = searchText
      ? `&search=${encodeURIComponent(searchText)}`
      : "";

    const url = `${SERVER_URL}/api/meal?page=${page}&row_count=${row_count}&bookmark=${boomark}${searchQuery}`;

    const res = await axios.get(url);
    fn(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(`${error} 가 발생했습니다. 데모데이터를 사용합니다.`);

    // 데모 데이터 로딩
    const demo = await axios.get("/json/getmeal.json");
    fn(demo.data);
  }
};
