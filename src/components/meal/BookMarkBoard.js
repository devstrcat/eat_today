import React, { useEffect, useState } from "react";
import { SmallWrap } from "../../styles/basic";
import BookMarkNotice from "./BookMarkNotice";

const BookMarkBoard = ({ data }) => {
  const [bmData, setBmData] = useState([]);

  useEffect(() => {
    const bmArr = data.filter(item => item.bookmark === 1);
    setBmData(bmArr);
  }, [data]);

  return (
    <div>
      <SmallWrap>
        {bmData.map(markData => (
          <BookMarkNotice key={markData.imeal} data={markData} />
        ))}
      </SmallWrap>
    </div>
  );
};

export default BookMarkBoard;
