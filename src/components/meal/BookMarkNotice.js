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
            <img src={data.pics} alt="사진을 넣어주세요" />
          </BookMarkNoticePics>
          <BookMarkNoticeTags>
            {data.tags.map((tags, index) => (
              <span key={index}>#{tags}</span>
            ))}
          </BookMarkNoticeTags>
        </BookMarkNoticeDiv>
      </Link>
    </div>
  );
};

export default BookMarkNotice;
