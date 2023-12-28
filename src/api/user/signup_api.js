import axios from "axios";
import { SERVER_URL } from "../config";

export const post = `${SERVER_URL}/api/user/signin`;
// siagger 객체로들어 온 데이터
//로그인api
export const PostUserS = async (objs, successPostUserS, failPostUserS) => {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/signin`, objs);
    successPostUserS(res.data);
  } catch (error) {
    console.log(error);
    failPostUserS();
  }
};