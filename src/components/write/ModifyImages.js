import React, { useEffect, useState } from "react";
import { AddImagesDiv } from "../../styles/write/addimages";
import styled from "@emotion/styled";
import "../../styles/write/addimages.css";
import { Modal, Upload } from "antd";

const Uimg = styled.div`
  width: 87px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffebd0;
  border-radius: 20px;
  cursor: pointer;
  img {
    object-fit: cover;
  }
`;
// 미리보기
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const ModifyImages = props => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  // 미리보기
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
  };

  const handleChange = async ({ fileList }) => {
    // console.log("AddImagees.js handleChange : ", fileList);
    setFileList(fileList);
    if (fileList.length > 0) {
      const nowIndex = fileList.length - 1;
      const tempFile = fileList[nowIndex];
      if (!tempFile.originFileObj) {
        await props.onImageUpload(tempFile.originFileObj, nowIndex);
      }
    }
  };

  const handleRemove = async file => {};

  useEffect(() => {
    if (!props.previewImageUrls) {
      // 배열이 없을 때 아무것도 실행안하게 함
    } else {
      const defaultFileList = props.previewImageUrls.map((url, index) => ({
        uid: `${index + 1}`,
        name: `${props.imageUrl}`,
        status: "done",
        url: url,
      }));
      setFileList(defaultFileList);
    }
  }, [props.previewImageUrls]);

  const uploadButton = (
    <Uimg>
      <img src="/images/write/add_icon.svg"></img>
    </Uimg>
  );

  return (
    <div>
      <AddImagesDiv>
        <Upload
          action={
            "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          }
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
      </AddImagesDiv>
    </div>
  );
};

export default ModifyImages;
