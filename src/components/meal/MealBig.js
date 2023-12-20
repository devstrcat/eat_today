import React from "react";
import NoticeBoardBig from "./NoticeBoardBig";
import { SmallWrap } from "../../styles/basic";

const MealBig = ({ data }) => {
  return (
    <div>
      <SmallWrap>
        {data.map(mealData => (
          <NoticeBoardBig key={mealData.imeal} data={mealData}></NoticeBoardBig>
        ))}
      </SmallWrap>
    </div>
  );
};

export default MealBig;
