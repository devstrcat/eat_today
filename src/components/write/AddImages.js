import React, { useEffect, useState } from "react";
import { AddImagesDiv } from "../../styles/write/addimages";
import styled from "@emotion/styled";
import "../../styles/write/addimages.css";
import { Modal, Upload } from "antd";
import { storage } from "../../fb/firebaseconfig";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

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

const AddImages = ({ onImageUpload }) => {
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

  // const handleChange = async ({ fileList: newFileList, file }) => {
  //   // Handle file upload for all statuses
  //   const imageUrl = await handleFileUpload(file.originFileObj);
  //   console.log("Image URL:", imageUrl);

  //   setFileList(newFileList);
  //   onImageUpload(imageUrl);
  // };

  // const handleFileUpload = async file => {
  //   try {
  //     const storageRef = ref(storage, "images/" + file.name);
  //     await uploadBytes(storageRef, file);
  //     const downloadURL = await getDownloadURL(storageRef);
  //     return downloadURL;
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //     throw error; // 에러를 다시 throw하여 호출자에게 전파
  //   }
  // };

  // const removeFile = async file => {
  //   // 삭제할 파일의 경로를 설정
  //   const storageRef = ref(storage, "images/" + file.name);
  //   await deleteObject(storageRef);

  //   // 삭제할 파일을 fileList에서 제거
  //   const newFileList = fileList.filter(item => item.uid !== file.uid);
  //   setFileList(newFileList);
  // };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
          // onRemove={removeFile}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
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
