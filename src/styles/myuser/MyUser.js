import styled from "@emotion/styled";

export const Cover = styled.div`
  position: fixed;
  width: 320px;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffebd0;
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }
  input {
    width: 150px;
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;

export const MyUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Log = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px 0;
  span {
    margin-right: 5px;
  }
`;
export const Name = styled.div`
  display: flex;
`;
export const UserButton = styled.button`
  width: 200px;
  margin: 15px;
  color: #fff;
  border-radius: 15px;
  background-color: #8a6c6c;
  padding: 13px 26px;
  font-family: "KingSejongInstitute";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
