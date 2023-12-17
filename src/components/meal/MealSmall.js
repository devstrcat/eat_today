import React from "react";
import NoticeBoardSmall from "./NoticeBoardSmall";
import { SmallWrap } from "../../styles/basic";

const MealSmall = ({BookMarkShow}) => {
  return (
    <div>
      <SmallWrap>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
        <NoticeBoardSmall BookMarkShow={BookMarkShow}></NoticeBoardSmall>
      </SmallWrap>
    </div>
  );
};

export default MealSmall;
