import styled from "@emotion/styled";

export const AddImagesDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
`;

export const AddImagesSelect = styled.div`
  position: relative;
  width: 87px;
  height: 77px;
  overflow: hidden;
  background: var(--brand-color2);
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AddImagesBlank = styled.div`
  width: 87px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffebd0;
  border-radius: 20px;

  img {
    width: 20px;
    height: 20px;
  }
`;
