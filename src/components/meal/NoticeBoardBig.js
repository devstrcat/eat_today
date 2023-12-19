import React from "react";
import {
  NoticeBoardPics,
  NoticeBoardReview,
  NoticeBoardStyle,
  NoticeBoardTags,
  NoticeBoardTitle,
} from "../../styles/meal/noticeboardbig";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  return (
    <div>
      <Link to={"more"}>
        <NoticeBoardStyle>
          <NoticeBoardTitle>
            <h2>초코케이크맛있다</h2>
          </NoticeBoardTitle>
          <NoticeBoardPics>
            <img src="/images/choco.png" alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            <span>#초콜릿</span>
            <span>#테그</span>
            <span>#힘들다</span>
            <span>#난뭐했니</span>
            <span>#하앙집갈레</span>
          </NoticeBoardTags>
          <NoticeBoardReview>
            <p>맛있는 초코케이크살찌겠다.</p>
          </NoticeBoardReview>
        </NoticeBoardStyle>
      </Link>
    </div>
  );
};

export default NoticeBoard;
