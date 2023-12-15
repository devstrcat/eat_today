import React from "react";
import {
  NoticeBoardDiv,
  NoticeBoardPics,
  NoticeBoardTags,
} from "../../styles/meal/noticeboard";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  return (
    <>
      <Link to={"more"}>
        <NoticeBoardDiv>
          <NoticeBoardPics>
            <img src="/images/choco.png" alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            <span>#초콜릿케이크</span>
            <span>#빵집</span>
            <span>#케이크</span>
            <span>#맛있다</span>
            <span>#어렵다</span>
          </NoticeBoardTags>
        </NoticeBoardDiv>
      </Link>
    </>
  );
};

export default NoticeBoard;
