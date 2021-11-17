//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { GlobalMainContainer } from '../globalStyledComp/globalComps.elements'

export const MainContainer = styled(GlobalMainContainer)`
  justify-content:center;
  background-color: white;
  @media screen and (max-width: 992px) {
    flex-direction:row;
  }
`;

export const SubContainer = styled.div`
  width:80%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  @media screen and (max-width: 576px) {
    flex-direction:column;
    width:90%
  }
  //background-color:purple;
`;

const redirectButton = styled.div`
  width:20vw;
  height:20vw;
  display:flex;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 576px) {
    width:40vw;
    height:40vw;
  }
`
export const GithubButton = styled(redirectButton)`
  background-color:lightgray;

`
export const EmailButton = styled(redirectButton)`
  background-color:lightgoldenrodyellow;

`
export const TelegramButton = styled(redirectButton)`
  background-color:lightskyblue;

`
