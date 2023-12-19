import axios from "axios";
import { SERVER_URL } from "../components/meal/config";

export const getMore = async setState => {
  try {
    const url = `/api/meal/30`;
    const res = await axios.get(url);
    setState(res.data);
    console.log(res.data);
  } catch (error) {
    alert(`${error}가 발생했습니다.`);
  }
};
