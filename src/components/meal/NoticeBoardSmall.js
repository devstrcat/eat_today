import React from "react";
import {
  BookMarkIcon,
  NoticeBoardDiv,
  NoticeBoardPics,
  NoticeBoardTags,
} from "../../styles/meal/noticeboardsmall";
import { Link } from "react-router-dom";

const NoticeBoardSmall = props => {
  const { data } = props;

  return (
    <div>
      <Link to={`/meal/more/${data.imeal}`}>
        <NoticeBoardDiv>
          {props.bookmark ? <BookMarkIcon /> : null}
          <NoticeBoardPics>
            <img src={data.pics} alt="사진을 넣어주세요" />
          </NoticeBoardPics>
          <NoticeBoardTags>
            {data.tags.map((tags, index) => (
              <span key={index}>#{tags}</span>
            ))}
          </NoticeBoardTags>
        </NoticeBoardDiv>
      </Link>
    </div>
  );
};

export default NoticeBoardSmall;
