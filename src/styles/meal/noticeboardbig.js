import styled from "@emotion/styled";

export const NoticeBoardStyle = styled.div`
  width: 231px;
  margin: 15px 0 0;
  position: relative;
  background: #ffebd0;
  padding: 8px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;
export const NoticeBoardTitle = styled.div`
  position: relative;
  margin-bottom: 8px;
  width: 100%;
  flex-shrink: 0;
  h2 {
    padding: 5px;
    position: relative;
    border: none;
    border-radius: 10px;
    display: inline-block;
    background: #fff;
  }
`;

export const NoticeBoardPics = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const NoticeBoardTags = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  span {
    border: none;
    background: #fff;
    border-radius: 5px;
    padding: 3px;
  }
`;
export const NoticeBoardReview = styled.div`
  background: #ffff;
  position: relative;
  width: 100%;
  height: 43px;
  word-break: break-all;
  border: none;
  overflow-y: auto;
  p {
    padding: 5px;
    position: relative;
    border: none;
    border-radius: 10px;
    display: inline-block;
    background: #fff;
  }
`;
