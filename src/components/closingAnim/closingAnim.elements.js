import styled, { keyframes } from "styled-components";

const MovingAnimation = keyframes` 
0% {
        left: 0%;
    }
    100% {
        left: 200%; 
    }
`

export const Container = styled.div`
width:100vw;
height:100vh;
align-items:center;
position:absolute;
overflow:hidden;
z-index:69;
top:0;
background-color:transparent;
`

export const Square = styled.div`
    background-color: #006466;
    width: 100vw;
    height: 10vh;
    animation: ${MovingAnimation} 2s;
    position: relative;
    animation-fill-mode:forwards;
`
export const Square2 = styled(Square)`
animation-delay:calc(0.1s);
background-color:#065A60;
`
export const Square3 = styled(Square)`
animation-delay:calc(0.1s + 0.1s);
background-color:#0B525B;
`
export const Square4 = styled(Square)`
animation-delay:calc(0.1s + 0.2s);
background-color:#144552;
`
export const Square5 = styled(Square)`
animation-delay:calc(0.1s + 0.3s);
background-color:#1B3A4B;
`
export const Square6 = styled(Square)`
animation-delay:calc(0.1s + 0.4s);
background-color:#212F45;
`
export const Square7 = styled(Square)`
animation-delay:calc(0.1s + 0.5s);
background-color:#272640;
`
export const Square8 = styled(Square)`
animation-delay:calc(0.1s + 0.6s);
background-color:#312244;
`
export const Square9 = styled(Square)`
animation-delay:calc(0.1s + 0.7s);
background-color:#3E1F47;
`
export const Square10 = styled(Square)`
animation-delay:calc(0.1s + 0.8s);
background-color:#4D194D;
`

