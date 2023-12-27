import React, { useEffect, useState } from "react";
import { Input, Space, Tag, Tooltip } from "antd";

const Edittags = ({ item, itemIndex, changeTags }) => {
  // console.log(itemIndex, item);
  const isLongTag = item.length > 10;
  const [edit, setEdit] = useState(false);
  const [tag, setTag] = useState("");
  const handlerChange = e => {
    setTag(e.target.value);
    changeTags(itemIndex, e.target.value);
  };
  const handlClick = _flag => {
    setEdit(_flag);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };

  const handleBlur = () => {
    setEdit(false);
  };

  useEffect(() => {
    setTag(item);
  }, [item]);

  return (
    // <Tag>
    //   #<span>{isLongTag ? `${item.slice(0, 10)}...` : item}</span>
    // </Tag>

    <Tag>
      {edit ? (
        <input
          type="text"
          value={item}
          onChange={e => {
            handlerChange(e);
          }}
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
          maxLength={10}
        />
      ) : (
        <span onClick={e => handlClick(true)}>
          # <span>{tag}</span>
        </span>
      )}
    </Tag>
  );
};

export default Edittags;
