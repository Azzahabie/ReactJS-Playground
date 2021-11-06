//eslint-disable-next-line
import styled, { keyframes } from "styled-components";

const moveDivAnimation = keyframes`
   0%{flex:0.9}
   1%{flex:0.9}
`;
const moveSmallDivAnimation = keyframes`
    0%{flex:0.1}
    25%{flex:0.1;}
    50%{flex:0.2;}
    100%{flex:0.3;}
`;
export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display:flex;

  @media screen and (max-width: 992px) {
    flex-direction:column;
  }
`;
export const LeftContainer = styled.div`
  display:flex;
  flex:0.7;
  height:${window.innerHeight};
  //background-color:red;
  justify-content:center;
  align-items:center;
  /* animation:${moveDivAnimation} 4s;
  animation-fill-mode:forwards;
  animation-delay:2s; */
  @media screen and (max-width: 992px) {
    flex:0.4;
    align-items:flex-end;
    
  }
`;
export const RightContainer = styled.div`
  flex:0.3;
  height:${window.innerHeight};
  //background-color:blue;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  /* animation:${moveSmallDivAnimation} 4s linear;
  animation-fill-mode:forwards;
  animation-delay:8s */
  @media screen and (max-width: 992px) {
    flex-direction:row;
    flex:0.4;
    
  }
  @media screen and (max-width: 576px) {
    flex-direction:column;
    
  }
`;

