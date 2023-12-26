import React from "react";
import {
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
          <NoticeBoardPics>
            {data.pics && data.pics.length > 0 ? (
              <img src={data.pics[0]} alt="사진을 넣어주세요" />
            ) : (
              <span>이미지가 없습니다.</span>
            )}
          </NoticeBoardPics>
          <NoticeBoardTags>
            {data.tags &&
              data.tags.map((tags, index) => <span key={index}>#{tags}</span>)}
          </NoticeBoardTags>
        </NoticeBoardDiv>
      </Link>
    </div>
  );
};

export default NoticeBoardSmall;
