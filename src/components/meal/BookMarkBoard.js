import React, { useEffect } from "react";
import { SmallWrap } from "../../styles/basic";
import BookMarkNotice from "./BookMarkNotice";

const BookMarkBoard = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div>
      <SmallWrap>
        {data.map(markData => (
          <BookMarkNotice key={markData.imeal} data={markData} />
        ))}
      </SmallWrap>
    </div>
  );
};

export default BookMarkBoard;
