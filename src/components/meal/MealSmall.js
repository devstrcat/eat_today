import React from "react";
import NoticeBoardSmall from "./NoticeBoardSmall";
import { SmallWrap } from "../../styles/basic";

const MealSmall = ({ data }) => {
  return (
    <div>
      <SmallWrap>
        {data.map(mealData => (
          <NoticeBoardSmall key={mealData.imeal} data={mealData} />
        ))}
      </SmallWrap>
    </div>
  );
};

export default MealSmall;9
