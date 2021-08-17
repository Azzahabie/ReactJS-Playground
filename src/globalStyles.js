import styled , { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    scrollbar-width:thin;
    scrollbar-color: black black;

    ::-webkit-scrollbar {
    width:5px;
    }

    ::-webkit-scrollbar-track {
    background: grey;
    }

    ::-webkit-scrollbar-thumb {
    background: black;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: white;
    }

}
`;

export const GlobalCenteredDiv = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
export const GlobalMainContainer = styled.main`
  background-color: grey;
  height: 2000px;
`;
