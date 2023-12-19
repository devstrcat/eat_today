import styled from "@emotion/styled";

export const RecipeWriteWrap = styled.div`
  position: relative;
  width: 320px;
  height: 960px;
  display: flex;
  justify-content: space-around;
`;

export const RecipeWriteTop = styled.div`
  position: relative;
  background-color: #fff;
`;

export const CancelButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

export const CancelButtonIcon = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  display: block;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 22px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 100px;
`;

export const AddImages = styled.div`
  position: relative;
  width: 320px;
  display: flex;
  justify-content: center;
`;

export const AddImagesLeft = styled.div`
  position: relative;
  width: 87px;
  height: 77px;
  overflow: hidden;
  background: #ffebd0;
  border-radius: 19px;

  img {
    width: 87px;
    height: 77px;
  }
`;

export const AddImagesMid = styled.div`
  width: 87px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 8px;
  margin-left: 8px;
  background: #ffebd0;
  border-radius: 19px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const AddImagesRight = styled.div`
  position: relative;
  width: 87px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #ffebd0;
  border-radius: 19px;

  img {
    width: 20px;
    height: 20px;
  }
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
  .textboxes-recipe {
    position: relative;
    width: 279px;
    height: 151px;
    margin-top: 36px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
  }

  .textboxes-comment {
    position: relative;
    width: 279px;
    height: 151px;
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
  justify-content: space-evenly;
  margin-top: 53px;

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

    img {
      width: 30px;
      height: 30px;
    }
  }
`;
