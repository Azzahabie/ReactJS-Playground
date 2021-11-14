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
  background-color:red;
  width:80%;
  @media screen and (max-width: 576px) {
    width:90%
  }
  //background-color:purple;
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
`;
export const Grids = styled.div`
  background:yellow;
  flex:33%;
  height:333px
`

