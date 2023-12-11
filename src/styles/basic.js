import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  max-width: ${props => props.maxw + "px"};
  min-width: ${props => props.minw + "px"};
  min-height: ${props => props.minh + "px"};
`;
