//eslint-disable-next-line
import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: burlywood;
  display:flex

`;
export const LeftContainer = styled.div`
  flex:0.6;
  height:${window.innerHeight};
  background-color:red;
`;
export const RightContainer = styled.div`
  flex:0.4;
  height:${window.innerHeight};
  background-color:blue;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
`;

