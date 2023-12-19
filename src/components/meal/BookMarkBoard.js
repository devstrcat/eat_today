import React from "react";
import { SmallWrap } from "../../styles/basic";
import BookMarkNotice from "./BookMarkNotice";

const BookMarkBoard = ({data}) => {
  return (
    <div>
      <SmallWrap>
        {data.map((markData) => (
          <BookMarkNotice key={markData.id} data={markData} bookmark={1}/>
        ))}
      </SmallWrap>
    </div>
  );
};

export default BookMarkBoard;
