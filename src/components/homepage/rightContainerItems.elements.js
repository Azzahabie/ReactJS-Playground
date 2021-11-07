//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInAnimation = keyframes`
    0% { opacity: 0 }
    30% {  opacity: 0.3 }
    60% {  opacity: 0.7; }
    100% { opacity: 1 }
`;

export const Container_1 = styled.div`
    opacity:0;
    width:80%;
    height:20%;
    animation: ${fadeInAnimation} 3s linear;
    animation-delay:1s;
    animation-fill-mode:forwards;
    display:flex;
    align-items:center;
    justify-content:center;
    @media screen and (max-width: 992px) {
    height:100%;
  }
`;

export const Container_2 = styled(Container_1)`
    animation-delay:1.5s;
    animation-fill-mode:forwards;
`;
export const Container_3 = styled(Container_1)`
    animation-delay:2s;
    animation-fill-mode:forwards;
`;

export const SubContainer_1 = styled(Link)`
    width:100%;
    background:grey;
    height:100%;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: black;
    text-decoration: none;
    &:hover {
      color: black;
    }
    &:active{
      color: black;
    }
    &:visited{
      color: black;
    }
    
    @media screen and (max-width: 992px) {
    width:80%;
    height:50%;
  }
`;

export const SubContainer_2 = styled(SubContainer_1)``;

export const SubContainer_3 = styled(SubContainer_1)``;