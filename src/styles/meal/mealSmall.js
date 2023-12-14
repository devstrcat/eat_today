import styled from "@emotion/styled";

export const NoticeBoardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const NoticeBoardStyle = styled.div`
  width: 128px;
  margin: 15px 0 0;
  background: #ffebd0;
  padding: 5px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const NoticeBoardPics = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 8px;
  width: 100%;
  overflow: hidden;
  border-radius: 9px;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;

export const NoticeBoardTags = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
  span {
    border: none;
    background: #fff;
    border-radius: 5px;
    padding: 3px;
    font-size: 0.7rem;
  }
`;
