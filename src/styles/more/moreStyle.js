import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  padding: 20px 27px 0;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  position: relative;
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const BtWrap = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bookmark {
    width: 20px;
    height: 20px;
    background: url("/images/common/book_mark_icon.svg") no-repeat center;
    cursor: pointer;
  }
  .bookmarkhover {
    width: 20px;
    height: 20px;
    background: url("/images/common/book_mark_icon_click.svg") no-repeat center;
    cursor: pointer;
  }
  .edit {
    width: 20px;
    height: 20px;
    background: url("/images/edit_icon.svg") no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
  .trash {
    width: 20px;
    height: 20px;
    background: url("/images/trash_icon.svg") no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
`;
export const MoreMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
`;
export const CakeImg = styled.img`
  width: 266px;
  height: 236px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const HashTagWrap = styled.ul`
  width: 266px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 0 10px;
    height: 25px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    padding-top: 5px;
    &:nth-child(2n) {
      background-color: #ffebd0;
    }
  }
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ingredient {
    background-color: #ffebd0;
    border-radius: 10px;
    width: 266px;
    height: 147px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .recipe {
    background-color: #ffebd0;
    border-radius: 10px;
    width: 266px;
    height: 151px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .comment {
    background-color: #ffebd0;
    border-radius: 10px;
    width: 266px;
    height: 100px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
