import React from "react";
import NoticeBoardSmall from "./NoticeBoardSmall";
import { SmallWrap } from "../../styles/basic";

const MealSmall = () => {
  return (
    <div>
      <SmallWrap>
        <NoticeBoardSmall></NoticeBoardSmall>
        <NoticeBoardSmall></NoticeBoardSmall>
        <NoticeBoardSmall></NoticeBoardSmall>
        <NoticeBoardSmall></NoticeBoardSmall>
        <NoticeBoardSmall></NoticeBoardSmall>
        <NoticeBoardSmall></NoticeBoardSmall>
      </SmallWrap>
    </div>
  );
};

export default MealSmall;
