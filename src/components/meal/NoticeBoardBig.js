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
            {data.pics && data.pics.length > 0 ? (
              <img src={data.pics[0]} alt="사진을 넣어주세요" />
            ) : (
              <span>이미지가 없습니다.</span>
            )}
          </NoticeBoardPics>
          <NoticeBoardTags>
          {data.tags &&
              data.tags.map((tags, index) => <span key={tags}>{`#${tags}`}</span>)} 
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
