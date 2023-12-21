import React from "react";
import {
  NoticeBoardPics,
  NoticeBoardReview,
  NoticeBoardStyle,
  NoticeBoardTags,
  NoticeBoardTitle,
} from "../../styles/meal/noticeboardbig";
import { Link } from "react-router-dom";

const NoticeBoard = ({ data }) => {
  return (
    <div>
      <Link to={`/meal/more/${data.imeal}`}>
        <NoticeBoardStyle>
          <NoticeBoardTitle>
            <h2>{data.title}</h2>
          </NoticeBoardTitle>
          <NoticeBoardPics>
            <img src={data.pics[0]} alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            {data.tags.map((tags, index) => (
              <span key={index}>#{tags}</span>
            ))}
          </NoticeBoardTags>
          <NoticeBoardReview>
            <p>{data.review}</p>
          </NoticeBoardReview>
        </NoticeBoardStyle>
      </Link>
    </div>
  );
};

export default NoticeBoard;
