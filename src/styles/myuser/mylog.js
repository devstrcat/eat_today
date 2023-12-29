import styled from "@emotion/styled";

export const Wraps = styled.div`
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
    width: 200px;
    border: none;
    padding: 7px;
    border-radius: 30px;
  }
`;

export const LogBoxs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LogBox = styled.form`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  .user {
    padding: 10px;
  }
`;
export const Name = styled.div`
  display: flex;
`;

export const Sign = styled.div`
  width: 200px;
  margin: 15px;
  padding: 13px 26px;
  background: #fff;
  color: #000;
  border-radius: 15px;
  text-decoration: none;
`;

export const ButtonLog = styled.button`
  width: 200px;
  margin: 15px;
  color: #fff;
  border: 1px solid;
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
