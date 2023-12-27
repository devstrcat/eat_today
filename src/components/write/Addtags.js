import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Space, Tag, Tooltip } from "antd";
import "../../styles/write/addtags.css";

// emotion (ant 디자인에서 가져와서 스타일 수정)
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
  // 데이터를 작성해서 보내는 것.
  const [tags, setTags] = useState([""]);
  // ant 디자인 작성하기 위한 것.
  const [inputVisible, setInputVisible] = useState(false);
  // 안트 최소, 최대 조절하기 위한 것.
  const [inputValue, setInputValue] = useState("");
  // 안트
  const inputRef = useRef(null);

  // 초기값(작성페이지 초기화면)을 하기 위한 useEffect
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  // 사용자가 작성한 내용을 업데이트 하고 ,
  // 부모 컴포넌트로 데이터 전송을 위해 useEffect 를 사용한다.
  useEffect(() => {
    // tags가 업데이트된 후에 onTagsUpdate 호출
    onTagsUpdate(tags);
  }, [tags, onTagsUpdate]);

  // 작성 후 지우는 기능.
  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  };
  // 작성 기능
  const showInput = () => {
    setInputVisible(true);
  };
  // 클릭이나 삭제할때 배열의 순서를 자동으로 지정하기 위한 것.
  const handleInputChange = e => {
    const inputValue = e.target.value;

    // 띄어쓰기가 있는 경우 제거하여 입력값으로 설정 (띄워쓰기를 막는다.)
    const trimmedInput = inputValue.replace(/\s/g, "");

    // 글자 수 10자 까지, 태그 5개 까지 는 실행이 되게 하는 조건문.
    if (trimmedInput.length <= 10 && tags.length < 5) {
      setInputValue(trimmedInput);
    }
  };

  // 위에 모든 기능을 적용 시켜주는 함수.
  // 엔터를 누르면 해시 태그 등록 되는 기능.
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
