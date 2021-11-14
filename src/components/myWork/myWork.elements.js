//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { GlobalMainContainer } from '../globalStyledComp/globalComps.elements'
import realSaleHeader from './RealSaleHeader.png';
import portfolioHeader from './portfolioHeader.png';
import posterHeader from './posterHeader.jpg'
import spGamesHeader from './spgamesHeader.gif'
import riderPalHeader from './riderPalHeader.png'
export const MainContainer = styled(GlobalMainContainer)`
  justify-content:center;
  background-color: white;
  @media screen and (max-width: 992px) {
    flex-direction:row;
  }
`;

export const SubContainer = styled.div`
  width:80%;
  @media screen and (max-width: 576px) {
    width:90%
  }
  //background-color:purple;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items:center;
`;

export const Grids = styled.div`

  height:300px;
  width:100%;
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
`
export const RealSale = styled(Grids)`
  background-image: url(${realSaleHeader});
`
export const Portfolio = styled(Grids)`
  background-image: url(${portfolioHeader});
`
export const PosterHeader = styled(Grids)`
  background-image: url(${posterHeader});
  background-position: 100% 100%;
`
export const SpGamesHeader = styled(Grids)`
  background-image: url(${spGamesHeader});
  background-size:cover;
`
export const RiderPalHeader = styled(Grids)`
  background-image: url(${riderPalHeader});

`
