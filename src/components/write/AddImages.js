import React, { useState } from 'react'
import { AddImagesDiv } from '../../styles/write/addimages'
import styled from '@emotion/styled';
import Upload from 'antd/es/upload/Upload';
import Modal from 'antd/es/modal/Modal';
import "../../styles/write/addimages.css"

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
`
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddImages = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([

  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <Uimg>
      {/* <PlusOutlined /> */}
      <img src='/images/add_icon.svg'></img>
    </Uimg>
  );

  return (
    <div>
        <AddImagesDiv>
          <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img
              alt="example"
              style={{
                width: '100%',
              }}
              src={previewImage}
            />
          </Modal>
        </AddImagesDiv>
    </div>
  )
}

export default AddImages