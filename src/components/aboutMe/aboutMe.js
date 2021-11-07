import React, { Component } from 'react'
import { ChatBox, ChatContainer, SenderChatContainer, Header, MainContainer, ProfContainer, ProfilePic, SenderChatBox, SubContainer, Username, WhoAmIText,WhoAmIContainer} from './aboutMe.elements'
export default class AboutMe extends Component {

    constructor(){
        super()
        this.state={
            animationRemoved : false
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({animationRemoved:true})
        }, 4000);
    }

    removeAnim = ( ) => {
        
    }
    render() {
        return (
            <MainContainer>
                {!this.state.animationRemoved? 
                    <WhoAmIContainer>
                        <WhoAmIText>so.. who am i?</WhoAmIText>
                    </WhoAmIContainer>
                    :
                    <SubContainer>
                    <Header>
                        <ProfContainer>
                        <ProfilePic>
                        </ProfilePic>
                        <Username>
                            Azzahabie
                        </Username>
                        </ProfContainer>
                    </Header>
    
                    <ChatContainer>
                        <ChatBox>I'm Azza, currently completing a diploma in Information Technology</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>I'm a proud graduate from ITE with a technical diploma in CyberSecurity</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>I created my first website back in 2017 but I only got serious in programming in 2020</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>Nowadays I can design website and apps using tools like adobe XD , Photoshop and Illustrtor</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>Then I can bring those ideas to life using</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>HTML. CSS, JavaScript, React, React Native</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>I also handle backend using REST API and connecting to databases such as postgres and mysql</ChatBox>
                    </ChatContainer>
                    <SenderChatContainer>
                        <SenderChatBox>then what are your goals?</SenderChatBox>
                    </SenderChatContainer>
                    <ChatContainer>
                        <ChatBox>I still want to do application development but I am planning to learn AI and machine learning</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>I believe these will be the future and I want to contribute in someway</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>Anyway, you can see my work.. ill send you links</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>My Work</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>My Contact</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>Back To Home</ChatBox>
                    </ChatContainer>
                    <ChatContainer>
                        <ChatBox>Thank you for your time</ChatBox>
                    </ChatContainer>
                    </SubContainer>
                }
           
               
            </MainContainer>
        )
    }
}
