import axios from "axios";

export const getMore = async (imeal, setMoreData, error500) => {
  try {
    const url = `/api/meal/${imeal}`;
    const res = await axios.get(url);
    setMoreData(res.data);
  } catch (error) {
    console.log(error);
    error500()
  }
};

export const deleteMore = async (imeal, setMoreData, error500) => {
  console.log("imeal=", imeal);
  try {
    const url = `/api/meal?imeal=${imeal}`;
    const res = await axios.delete(url);
    setMoreData(res.data);
  } catch (error) {
    console.log(error);
    error500()
  }
};
