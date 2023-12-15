import React from "react";
import { NoticeBoardPics, NoticeBoardReview, NoticeBoardStyle, NoticeBoardTags, NoticeBoardTitle } from "../../styles/mealbigStyle";

const NoticeBoard = () => {
  return (
    <div>
      <NoticeBoardStyle>
        <NoticeBoardTitle>
          <p>초코케이크맛있다</p>
        </NoticeBoardTitle>
        <NoticeBoardPics>
          <img src="/images/choco.png" alt="사진을 넣어주세요" />
        </NoticeBoardPics>
        <NoticeBoardTags>
          <span># 초콜</span>
          <span># 테그</span>
          <span># 힘들다</span>
          <span># 난 뭐했니</span>
          <span># 하앙 집갈레</span>
        </NoticeBoardTags>
        <NoticeBoardReview>
          <p>맛있는 초코케이크살찌겠다.</p>
        </NoticeBoardReview>
      </NoticeBoardStyle>
      <NoticeBoardStyle>
        <NoticeBoardTitle>
          <p>초코케이크맛있다</p>
        </NoticeBoardTitle>
        <NoticeBoardPics>
          <img src="/images/choco.png" alt="사진을 넣어주세요" />
        </NoticeBoardPics>
        <NoticeBoardTags>
          <span># 초콜</span>
          <span># 테그</span>
          <span># 힘들다</span>
          <span># 난 뭐했니</span>
          <span># 하앙 집갈레</span>
        </NoticeBoardTags>
        <NoticeBoardReview>
          <p>맛있는 초코케이크살찌겠다.</p>
        </NoticeBoardReview>
      </NoticeBoardStyle>
      <NoticeBoardStyle>
        <NoticeBoardTitle>
          <p>초코케이크맛있다</p>
        </NoticeBoardTitle>
        <NoticeBoardPics>
          <img src="/images/choco.png" alt="사진을 넣어주세요" />
        </NoticeBoardPics>
        <NoticeBoardTags>
          <span># 초콜</span>
          <span># 테그</span>
          <span># 힘들다</span>
          <span># 난 뭐했니</span>
          <span># 하앙 집갈레</span>
        </NoticeBoardTags>
        <NoticeBoardReview>
          <p>맛있는 초코케이크살찌겠다.</p>
        </NoticeBoardReview>
      </NoticeBoardStyle>
    </div>
  );
};

export default NoticeBoard;
