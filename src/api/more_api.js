import axios from "axios";

export const getMore = async (imeal, setMoreData) => {
  try {
    const url = `/api/meal/${imeal}`;
    const res = await axios.get(url);
    setMoreData(res.data);
  } catch (error) {
    // console.log(error);
  }
};

export const deleteMore = async (imeal, setMoreData) => {
  // console.log("imeal=", imeal);
  try {
    const url = `/api/meal?imeal=${imeal}`;
    const res = await axios.delete(url);
    setMoreData(res.data);
  } catch (error) {
    // console.log(error);
  }
};
