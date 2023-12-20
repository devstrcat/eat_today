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

const NoticeBoard = props => {
  //목록 get
  const [mealData, setMealData] = useState(initData);
  const [page, setpage] = useState(1);
  const [row_conut, setrow_conut] = useState(4);
  const [bookmark, setbookmark] = useState(0);
  const [search, setsearch] = useState("");

  //딱 한번 호출한다.(시점,화면이 보일떄)
  useEffect(() => {
    getMleal(page, row_conut, bookmark, search, setMealData);
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
            {item.tags.map((tags, index) => (
              <span key={index}>#{tags}</span>
            ))}
          </NoticeBoardTags>
          <NoticeBoardReview>
            <p>{item.review}</p>
          </NoticeBoardReview>
        </NoticeBoardStyle>
      ))}
    </div>
  );
};

export default NoticeBoard;
