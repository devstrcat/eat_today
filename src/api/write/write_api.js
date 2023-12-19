import axios from "axios";

export const postWrite = async setWriteData => {
  try {
    // http://192.168.0.144:5214/api/meal
    const res = await axios.post("");
    setWriteData(res.data);
    console.log(res.data);
  } catch (error) {
    // console.log(error);
    
    setWriteData([
      {
        title: "제목 입력.",
        ingredient: "재료 입력.",
        recipe: "레시피",
        review: "리뷰",
        pics: ["사진", "picadd1" ,"picadd2","tagadd"],
        tags: ["태그", "태그2"],
      },
    ]);
  }
};
