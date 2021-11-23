//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { GlobalMainContainer } from '../globalStyledComp/globalComps.elements'
import realSaleHeader from './header/RealSaleHeader.png';
import portfolioHeader from './header/portfolioHeader.png';
import posterHeader from './header/posterHeader.jpg'
import spGamesHeader from './header/spgamesHeader.gif'
import riderPalHeader from './header/riderPalHeader.png'
import cvsHeader from './header/cvsHeader.gif'
import kcollectHeader from './header/kcollectHeader.gif'
import { Link } from "react-router-dom";


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
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;

  }
`;

export const Grids = styled.div`

  height:300px;
  width:100%;
  background-color:lightblue;
  background-size:cover;
  background-repeat:no-repeat;
  background-position: center;
  @media screen and (max-width: 576px) {
    margin:10px

  }
`
export const MyWorkHeader = styled.h2`
  text-align:center;
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
  background-size:contain;
`
export const RiderPalHeader = styled(Grids)`
  background-image: url(${riderPalHeader});


`
export const CvsHeader = styled(Grids)`
  background-image: url(${cvsHeader});

`
export const KcollectHeader = styled(Grids)`
  background-image: url(${kcollectHeader});
  background-size:contain;

`
export const MyLinks = styled(Link)`
    width:100%;
    height:100%;
`;