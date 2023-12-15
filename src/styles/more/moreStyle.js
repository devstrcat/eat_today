import styled from "@emotion/styled";

export const MoreWrap = styled.div`
  padding-bottom: 120px;
`;
export const HeaderWrap = styled.div`
  display: flex;
  padding: 20px 27px 0;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-size: 16px;
  text-align: center;
  position: relative;
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  padding-top: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const BtWrap = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .edit {
    width: 20px;
    height: 20px;
    background: url("/images/edit_icon.svg");
    cursor: pointer;
  }

  .trash {
    width: 20px;
    height: 20px;
    background: url("/images/trash_icon.svg");
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
  border-radius: 20px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const HashTagWrap = styled.div`
  width: 266px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .hashtag_1,
  .hashtag_3 {
    padding: 0 10px;
    height: 25px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    padding-top: 8px;
  }
  .hashtag_2,
  .hashtag_4 {
    padding: 0 10px;
    height: 25px;
    border-radius: 20px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    padding-top: 8px;
    background-color: #ffebd0;
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
