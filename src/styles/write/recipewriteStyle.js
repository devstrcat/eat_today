import styled from "@emotion/styled";

export const RecipeWriteWrap = styled.div`
  position: relative;
  width: 320px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const RecipeWriteTop = styled.div`
  position: relative;
  background-color: #fff;
`;

export const TextBoxes = styled.div`
  position: relative;
  text-align: center;

  .textboxes-title {
    position: relative;
    width: 279px;
    height: 40px;
    margin-top: 22px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 10px;
  }
  .textboxes-ingre {
    position: relative;
    width: 279px;
    height: 40px;
    margin-top: 22px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 10px;
  }
`;

export const TextBoxHashTags = styled.div`
  position: relative;
  display: flex;
  margin-top: 22px;
  justify-content: center;
  width: 100%;

  .textboxes-tags-left {
    position: relative;
    width: 108px;
    height: 44px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
    font-size: 9px;
  }

  .textboxes-tags-mid {
    position: relative;
    width: 108px;
    height: 44px;
    margin-left: 10px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
    font-size: 9px;
  }
  .textboxes-tags-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    margin-left: 10px;
    border: 0;
    background: #ffebd0;
    border-radius: 10px;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export const RecipeComment = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .textboxes-recipe {
    position: relative;
    width: 280px;
    height: 150px;
    margin-top: 36px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
  }

  .textboxes-comment {
    position: relative;
    width: 280px;
    height: 150px;
    margin-top: 22px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
  }
`;

export const WriteButtons = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 20px 0;

  .restart-bt {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 100px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .complete-bt {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #ffebd0;
    border-radius: 100px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
