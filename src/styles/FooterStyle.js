import styled from "@emotion/styled";

// emotion
export const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 390px;
  width: 100%;
  padding-top: 9px;
  padding-bottom: 11px;
  display: flex;
  justify-content: space-around;
  border-radius: 20px 20px 0 0;
  background-color: #fdb456;
`;
export const FooterImg = styled.img`
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;
export const FooterButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  background: url("/images/common/search.svg") no-repeat;
  background-size: cover;
  cursor: pointer;
`;
