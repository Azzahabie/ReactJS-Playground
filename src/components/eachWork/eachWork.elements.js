//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { GlobalMainContainer } from '../globalStyledComp/globalComps.elements'

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 992px) {

  }
`;

export const SubContainer = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 576px) {
    width:90%
  }
  //background-color:purple;
`;

export const CarouselContainer = styled.div`
  width:75vh;

`;
export const AboutContainer = styled.div`
  background-color:lightgray;
  width:80%;
  min-height:20vh
`;
export const MyFooter = styled.div`
  background-color:black;
  width:100%;
  height:300px;
  margin-top:50px
`
export const MyTitle = styled.h2`
  margin:40px;
`