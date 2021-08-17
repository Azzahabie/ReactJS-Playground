import styled from "styled-components";

export const MainContainer = styled.div`
width:1000px;
min-height:600px;
background-color:salmon;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
export const StyledTaskedContainer = styled.div`
width:70%;
height:30%;
background-color:${props => props.primary ? "red" : "coral"}
`