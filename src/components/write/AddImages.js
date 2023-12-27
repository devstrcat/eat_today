import React, { useEffect, useState } from "react";
import { AddImagesDiv } from "../../styles/write/addimages";
import styled from "@emotion/styled";
import "../../styles/write/addimages.css";
import { Modal, Upload } from "antd";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../fb/firebaseconfig";

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

const AddImages = props => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  // 미리보기
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // 이미지가 업로드되면 onImageUpload 함수 호출
    newFileList.forEach(async (file, index) => {
      if (file.status === "done" && !file.alreadyUploaded) {
        file.alreadyUploaded = true;
        await props.onImageUpload(file.originFileObj, index);
      }
    });
  };

  const handleRemove = async file => {
    try {
      const deleteFileName = `images/${file.name}`;
      console.log("삭제 진행 중 ", deleteFileName);

      const storageRef = ref(storage, `images/${file.name}`);
      await deleteObject(storageRef);

      if (props.imageUrl) {
        const getName = encodeURIComponent(`images/${file.name}`);

        const filteredImageUrls = props.imageUrl.filter(
          url => !url.includes(getName),
        );
        props.setPics(filteredImageUrls);

        const filteredFileList = fileList.filter(f => f.uid !== file.uid);
        setFileList(filteredFileList);
      }
    } catch (error) {
      console.log(error);
    }
  };
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

export default AddImages;
