import styled from "@emotion/styled";

export const NoticeBoardDiv = styled.div`
  width: 128px;
  height: 153px;
  margin: 10px 0 0;
  background: var(--brand-color2);
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
  background-color: #fff;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;

export const BookMarkIcon = styled.img`
  content: url("/images/common/book_mark_icon_click.svg");
  position: absolute;
  z-index: 5;
  transform: translate(100px, -50%);
`;

export const NoticeBoardTags = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-bottom: 3px;
  span {
    background: #fff;
    border-radius: 10px;
    padding: 3px;
    font-size: 0.7rem;
  }
`;
