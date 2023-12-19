import React, { useEffect, useState } from "react";
import {
  NoticeBoardPics,
  NoticeBoardReview,
  NoticeBoardStyle,
  NoticeBoardTags,
  NoticeBoardTitle,
} from "../../styles/meal/noticeboardbig";
import { getMleal } from "../../api/meal/big_api";

const initData = [];

const NoticeBoard = () => {
  //목록 get
  const [mealData, setMealData] = useState(initData);

  //딱 한번 호출한다.(시점,화면이 보일떄)
  useEffect(() => {
    getMleal(setMealData);
  }, []);

  return (
    <div>
      {mealData.map(item => (
        <NoticeBoardStyle key={item.imeal}>
          <NoticeBoardTitle>
            <h2>{item.title}</h2>
          </NoticeBoardTitle>
          <NoticeBoardPics>
            <img src={item.pics[0]} alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            <span>#{item.tags[0]}</span>
          </NoticeBoardTags>
          <NoticeBoardReview>
            <p>{item.reciew}</p>
          </NoticeBoardReview>
        </NoticeBoardStyle>
      ))}
    </div>
  );
};

export default NoticeBoard;
