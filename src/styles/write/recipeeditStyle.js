import styled from "@emotion/styled";

export const RecipeWriteWrap = styled.div`
  position: relative;
  width: 320px;
  height: 960px;

  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;

export const RecipeWriteTop = styled.div`
  position: relative;
  background-color: #fff;
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
  position: relative;
  width: 87px;
  height: 77px;
  overflow: hidden;
  background: #ffebd0;
  border-radius: 19px;
  margin-right: 8px;
  margin-left: 8px;

  img {
    width: 87px;
    height: 77px;
  }
`;

export const AddImagesRight = styled.div`
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
export const TextBoxes = styled.div`
  position: relative;
  text-align: center;

  .textboxes-title {
    position: relative;
    width: 279px;
    height: 40px;
    margin-top: 22px;
    padding: 8px;
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
    padding: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 10px;
  }
`;

export const TextBoxHashTagsSong = styled.div`
  position: relative;
  width: 266px;
  display: flex;
  margin-left: 20px;
  margin-top: 22px;
  flex-wrap: wrap;
  gap: 10px;
  > span {
    display: inline;
    box-sizing: border-box;

    input[type="text"] {
      max-width: 100px;
      min-width: 64px;
      border: none;
      width: 90%;
    }
  }
`;

export const TextBoxHashTags = styled.ul`
  position: relative;
  width: 266px;
  display: flex;
  margin-left: 20px;
  margin-top: 22px;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 0 10px;
    height: 25px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    padding-top: 5px;
    &:nth-of-type(2n) {
      background-color: #ffebd0;
    }
  }

  /* position: relative;
  display: flex;
  margin-top: 22px;
  justify-content: center;
  width: 100%; */

  /* .textboxes-tags-left {
    position: relative;
    width: 108px;
    height: 44px;
    padding-left: 8px;
    border: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
    background: #fff;
    border-radius: 10px;
    font-size: 9px;
  } */

  /* .textboxes-tags-mid {
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
  } */

  /* img {
    width: 15px;
    height: 15px;
  } */
`;

export const RecipeComment = styled.div`
  .textboxes-recipe {
    position: relative;
    width: 279px;
    height: 151px;
    margin-top: 36px;
    padding: 8px;
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
    padding: 8px;
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
