import axios from "axios";

export const postMeal = async obj => {
    console.log("postMeal", obj);
  
    try {
      // http://112.222.157.156:5214/swagger.html
      // http://192.168.0.144:5214/api/meal
  
      const res = await axios.post("/api/meal", obj);
      console.log("일지전송 성공", res.data);
    } catch (error) {
      console.log(error);
      alert("서버 에러");
    }
  };