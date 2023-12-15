import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  min-height: ${props => props.minh + "vh"};
  margin: 0 auto;
  width: ${props => props.width + "px"};
  background-color: #fff;
  padding-bottom: 80px;
`;

export const SmallWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
