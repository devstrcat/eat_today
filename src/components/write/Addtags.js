import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Space, Tag, Tooltip } from "antd";
import "../../styles/write/addtags.css";

// emotion
const tagInputStyle = {
  width: 64,
  height: 22,
  verticalAlign: "middle",
  lineHeight: "22px",
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.25) 4px 4px 4px 0px",
  fontFamily: "KingSejongInstitute",
};
const tagPlusStyle = {
  height: 22,
  lineHeight: "22px",
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.25) 4px 4px 4px 0px",
};

const AddTags = ({ onTagsUpdate }) => {
  const [tags, setTags] = useState([""]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    // tags가 업데이트된 후에 onTagsUpdate 호출
    onTagsUpdate(tags);
  }, [tags, onTagsUpdate]);

  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = e => {
    const inputValue = e.target.value;

    // 띄어쓰기가 있는 경우 제거하여 입력값으로 설정
    const trimmedInput = inputValue.replace(/\s/g, "");

    if (trimmedInput.length <= 10 && tags.length < 6) {
      setInputValue(trimmedInput);
    }
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue) && tags.length < 5) {
      setTags(prevTags => {
        const newTags = [...prevTags, inputValue];
        return newTags.filter(Boolean);
      });
      onTagsUpdate(tags);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 10;
        const tagElem = (
          <Tag
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            #<span>{isLongTag ? `${tag.slice(0, 10)}...` : tag}</span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
          New Tag
        </Tag>
      )}
    </Space>
  );
};
export default AddTags;
