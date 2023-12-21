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
    const resStatus = res.status.toString();
    // "400"
    if (resStatus.charAt(0) === "2") {
      // 정상적인 처리
      fn(res.data);
    } else if (resStatus.charAt(0) === "4") {
      // 클라이언트측에서 오타를 내거나 아니면 값을 전달하거나, 한개를 누락거나,
      // 백엔드측에서 쿼리를 수정을 하거나 추가, 삭제를 한경라고 판단
      alert("입력항목을 다시 확인해주세요!");
    }
  } catch (error) {
    // 서버가 불안정하거나 오류가 발생된 경우 500 입니다.
    // 메세지 샘플 : 존재하지 않는 주소를 입력하셨거나요청하신 페이지의 주소가 변경,삭제되어 찾을 수 없습니다
    console.log(error);
    alert(`${error} 가 발생했습니다. 데모데이터를 사용합니다.`);

    // 데모 데이터 로딩
    const demo = await axios.get("/json/getmeal.json");
    fn(demo.data);
  }
};
