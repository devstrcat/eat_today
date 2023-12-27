import axios from "axios";

export const getMore = async (imeal, setMoreData) => {
  try {
    const url = `/api/meal/${imeal}`;
    const res = await axios.get(url);
    setMoreData(res.data);
  } catch (error) {
    console.log(error);
    window.location.href = "/";
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
    window.location.href = "/";
  }
};
