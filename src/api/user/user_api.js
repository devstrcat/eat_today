import axios from "axios";
import { SERVER_URL } from "../config";

export const post = `${SERVER_URL}/api/user/signup`;
// siagger 객체로들어 온 데이터
// 회원 가입 api
export const PostUser = async (obj, error500) => {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/signup`, obj);
    // console.log(res.data);
  } catch (error) {
    console.log(error);
    error500();
  }
};
