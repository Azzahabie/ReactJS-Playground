//eslint-disable-next-line
import styled, { keyframes } from "styled-components";
import { GlobalMainContainer } from '../globalStyledComp/globalComps.elements'

const fadeInChat= keyframes`  
  0%{opacity:0}
  100%{opacity:1}
`;

export const MainContainer = styled(GlobalMainContainer)`

  background-color: azure;
  justify-content:center;
  @media screen and (max-width: 992px) {
    flex-direction:row;
  }
`;

export const SubContainer = styled.div`
  width:70%;
  //background-color:purple;
`
export const Header = styled.div`
  width:100%;
  height:15vh;
  //background-color:red;
  display:flex;
  `;

export const ProfContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const ProfilePic = styled.div`
  height: 8vh; 
  width:8vh;
  border-radius:999px;
  background-color:black;
  margin-right:20px
`;

export const Username = styled.h2`
  color:black;
  
`;

export const ChatContainer = styled.div`
  width:80%;
  height:auto;
  padding:10px;
  margin-bottom:10px;
  @media screen and (max-width: 576px) {
    width:80%;
  }
`
export const ChatBox = styled.div`
  width:fit-content;
  height:100%;
  border-radius:2vh;
  padding-top:10px;
  padding-bottom:10px;
  padding-left: 20px;
  padding-right:20px;
  background-color:lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  font-size:20px;
  animation:${fadeInChat} 1s;
  animation-fill-mode:forwards;
  @media screen and (max-width: 576px) {
    font-size:16px;
  }
`;

export const SenderChatContainer = styled(ChatContainer)`
  width:100%;
  display:flex;
  justify-content:flex-end;
`;

export const SenderChatBox = styled(ChatBox)`
`;

export const WhoAmIContainer = styled.div`
  overflow-y:hidden;
  justify-content:center;
  align-items:center;
  background-color:azure;
  width:100%;
  display:flex;
  
`

const fadeIn = keyframes`
    0%{opacity:0}
    60%{opacity:1}
    100%{opacity:0}
`;

export const WhoAmIText = styled.h2`
  color:black;
  animation:${fadeIn} 3.5s linear;
  animation-fill-mode: forwards;

`
