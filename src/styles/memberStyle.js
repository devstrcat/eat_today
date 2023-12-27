import styled from "@emotion/styled";
export const MemberWrap = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 60px;
`;



export const MemberBox = styled.div`
display: flex;
gap: 40px;
/* justify-content: space-between; */
color: #4C3724;
padding-left: 20px;

.box-wrap {
  position: relative;
}

img {
    width: 180px;
    height: 70px;
    opacity: 0.6;
}

.role {
  position: absolute;
    font-size: 13px;
    z-index: 1;
    top: 0;
    font-family: 'KimjungchulMyungjo-Bold';
    text-align: center;
}

`;
export const Circle = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #DBE8E3;
    border-radius: 50px;
    text-align: center;
    /* align-items: center; */
    padding-top: 30px;
    font-size: 14px;
    gap: 50px;
    font-family: 'KimjungchulMyungjo-Bold';
    color: #5B3928;
    `
 


