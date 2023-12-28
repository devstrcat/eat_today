import axios from "axios";
import { SERVER_URL } from "../config";

export const post = `${SERVER_URL}/api/user/signin`;
// siagger 객체로들어 온 데이터
//로그인api
export const PostUserS = async objs => {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/signin`, objs);
    // console.log(res.data);
  } catch (error) {
    console.log(error);
    window.location.href = "/";
  }
};
