import styled from "@emotion/styled";

export const Cover = styled.div`
  position: fixed;
  width: 320px;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffebd0;
  img {
    width: 100px;
    height: 100px;
  }
  input {
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;

export const MyUser = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  padding-top: 100%;
  width: 300px;
`;
export const Log = styled.div`
  width: 320px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;

  margin-top: 20px;
  gap: 5px;
  .user {
    padding: 10px;
  }
  .id,
  .pw {
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;
export const Name = styled.div`
  display: flex;
`;
export const UserButton = styled.button`
  margin: 15px;
  color: #fff;
  border: 1px solid;
  border-radius: 15px;
  background-color: #8a6c6c;
  padding: 9px;
  padding-left: 26px;
  padding-right: 26px;
  border-color: #8a6c6c;
  border-width: 4px;
  font-family: "KingSejongInstitute";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
