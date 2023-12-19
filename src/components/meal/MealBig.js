import React from "react";
import NoticeBoardBig from "./NoticeBoardBig";
import { SmallWrap } from "../../styles/basic";

const MealBig = () => {
  return (
    <div>
      <SmallWrap>
        <NoticeBoardBig></NoticeBoardBig>
        <NoticeBoardBig></NoticeBoardBig>
        <NoticeBoardBig></NoticeBoardBig>
        <NoticeBoardBig></NoticeBoardBig>
        <NoticeBoardBig></NoticeBoardBig>
      </SmallWrap>
    </div>
  );
};

export default MealBig;
