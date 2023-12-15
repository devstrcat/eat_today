import styled from "@emotion/styled";

export const NoticeBoardStyle = styled.div`
  width: 231px;
  margin: 15px auto;
  position: relative;
  background: #ffebd0;
  padding: 11px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;
export const NoticeBoardTitle = styled.h4`
  position: relative;
  margin: 11px;
  width: 101px;
  height: 20px;
  flex-shrink: 0;
  p {
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
  margin: 0 0 8px;

  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  img {
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
    max-width: 31%;
    padding: 3px;
  }
`;
export const NoticeBoardReview = styled.div`
  background: #ffff;
  position: relative;
  width: 203px;
  height: 43px;
  margin: auto;
  word-break: break-all;
  border: none;
  p {
    padding: 5px;
    position: relative;
    border: none;
    border-radius: 10px;
    display: inline-block;
    background: #fff;
  }
`;
