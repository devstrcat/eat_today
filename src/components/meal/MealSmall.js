import React from "react";
import NoticeBoard from "./NoticeBoard";
import { SmallWrap } from "../../styles/basic";

const MealSmall = () => {
  return (
    <div>
      <SmallWrap>
        <NoticeBoard></NoticeBoard>
        <NoticeBoard></NoticeBoard>
        <NoticeBoard></NoticeBoard>
        <NoticeBoard></NoticeBoard>
        <NoticeBoard></NoticeBoard>
        <NoticeBoard></NoticeBoard>
      </SmallWrap>
    </div>
  );
};

export default MealSmall;
