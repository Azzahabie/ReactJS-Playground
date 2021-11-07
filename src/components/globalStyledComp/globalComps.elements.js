//eslint-disable-next-line
import styled, { keyframes } from "styled-components";

export const GlobalMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display:flex;

  @media screen and (max-width: 992px) {
    flex-direction:column;
  }
`;
