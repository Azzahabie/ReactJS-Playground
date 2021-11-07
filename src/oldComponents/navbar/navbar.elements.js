import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: rgb(14, 3, 3);
    height: 8vh;
    display: flex;
    align-items: center;
`
export const StyledUL = styled.ul`
    list-style-type: none;
    height: 100%;
    width: 100%;
    padding: 0px;
`
export const StyledLi = styled.li`
    float: left;
    background-color: #d61a1a;
    text-align: center;
    height: 100%;
    width: 100px;
    text-decoration: none;
    margin-left: 20px;
`
export const StyledLiFloatRight = styled(StyledLi)`
    float:right;
    background-color:yellow;
    margin-left:0px;
    margin-right:20px
`