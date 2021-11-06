//eslint-disable-next-line
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
    0% { opacity: 0 }
    30% {  opacity: 0.3 }
    60% {  opacity: 0.7; }
    100% { opacity: 1 }
`;
export const Container_1 = styled.div`
    background-color:yellow;
    width:80%;
    height:20%;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    animation: ${fadeInAnimation} 3s linear;
`;

export const Container_2 = styled.div`
    background-color:green;
    opacity:0;
    width:80%;
    height:20%;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    animation: ${fadeInAnimation} 2s linear;
    animation-delay:0.3s;
    animation-fill-mode:forwards;
`;
export const Container_3 = styled.div`
    background-color:pink;
    width:80%;
    height:20%;
    opacity:0;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    animation: ${fadeInAnimation} 2s linear;
    animation-delay:0.8s;
    animation-fill-mode:forwards;
`;

