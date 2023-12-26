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

    //상태체크하기
    const situation = res.status.toString();
    if (situation.charAt(0) === "2") {
      //정상 처리
      fn(res.data);
    } else if (situation.situation(0) === "4") {
      //클라이언트(리엑트)에서 값의 종류 및 단어가 잘못 기재된 경우
      window.alert(
        " 존재하지 않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다 ",
      );
      window.location.href = "http://localhost:3000/meal/400";
    } else if (situation.situation(0) === "5") {
      //클라이언트(리엑트)에서 값의 종류 및 단어가 잘못 기재된 경우
      window.alert(
        " 존재하지 않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다 ",
      );
      window.location.href = "http://localhost:3000/meal/500";
    }
  } catch (error) {
    console.log(error);
    alert(`${error} 가 발생했습니다. 데모데이터를 사용합니다.`);

    // 데모 데이터 로딩
    const demo = await axios.get("/json/getmeal.json");
    fn(demo.data);
  }
};
