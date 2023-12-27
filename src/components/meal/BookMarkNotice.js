import React from "react";
import { Link } from "react-router-dom";
import {
  BookMarkIcon,
  BookMarkNoticeDiv,
  BookMarkNoticePics,
  BookMarkNoticeTags,
} from "../../styles/meal/bookmarknotice";

const BookMarkNotice = props => {
  const { data } = props;

  return (
    <div>
      <Link to={`/meal/more/${data.imeal}`}>
        <BookMarkNoticeDiv>
          <BookMarkIcon />
          <BookMarkNoticePics>
            {data.pics && data.pics.length > 0 ? (
              <img src={data.pics[0]} alt="사진을 넣어주세요" />
            ) : (
              <span>이미지가 없습니다.</span>
            )}
          </BookMarkNoticePics>
          <BookMarkNoticeTags>
            {data.tags &&
              data.tags.map((tags, index) => <span key={index}>#{tags}</span>)}
          </BookMarkNoticeTags>
        </BookMarkNoticeDiv>
      </Link>
    </div>
  );
};

export default BookMarkNotice;
