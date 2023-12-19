import axios from "axios";
import { SERVER_URL } from "../config";

// 내용 가져오기 
export const getMeal = async(page, row_count, boomark, fn, tags, title) => {
    try {
        const url = `${SERVER_URL}/api/meal?page=${page}&row_count=${row_count}&bookmark=${boomark}`+
        `${tags ? `&tags=${tags}` : ''}${title ? `&title=${title}` : ''}`;
        const res = await axios.get(url);
        fn(res.data);
    } catch (error) {
        console.log(error);
        alert(`${error} 가 발생했습니다. 데모데이터 쓸게요.`);

        const demo = await axios.get("/json/getmeal.json");
        fn(demo.data);
    }
}