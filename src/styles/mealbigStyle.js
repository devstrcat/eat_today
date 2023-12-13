import styled from "@emotion/styled";

export const Detais = styled.div`
  width: 231px;
  height: 292px;
  margin: 0 auto;
`;

export const DulletInbox = styled.div`
  position: relative;
  background: #ffebd0;
  padding: 11px;
`;
export const BulletinboxTitle = styled.h4`
  position: relative;
  margin: 11px;
  width: 101px;
  height: 20px;
  flex-shrink: 0;
  input {
    position: relative;
    border: none;
    display: flex;
    padding: 3px;
    border-radius: 10px;
    display: inline-block;
    background: #fff;
  }
`;
export const BulletinboxtitleInput = styled.div`
  position: relative;
  border: none;
  display: flex;
  padding: 3px;
  border-radius: 10px;
  display: inline-block;
  background: #fff;
`;
export const BulletinboxPicture = styled.div`
  position: relative;
  margin: auto;
  padding: 3px;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
`;
export const BulletinboxHashtag = styled.div`
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
export const Derail = styled.div`
  background: #ffff;
  position: relative;
  width: 203px;
  height: 43px;
  margin: auto;
  word-break: break-all;
  border: none;
`;
