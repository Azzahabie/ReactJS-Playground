import React, { Component } from 'react'
import { ChatBox, ChatContainer, SenderChatContainer, Header, MainContainer, ProfContainer, ProfilePic, SenderChatBox, SubContainer, Username, WhoAmIText, WhoAmIContainer } from './aboutMe.elements'
import Delayed from './delayed'
export default class AboutMe extends Component {

    constructor() {
        super()
        this.state = {
            animationRemoved: false,
            startAnim: false,
            myWords: ["HI! I'm Azza!", "I'm currently completing a diploma in Information Technology", "I'm a proud graduate from ITE with a technical diploma in CyberSecurity", "I created my first website back in 2017 but I only got serious in programming in 2020"
                , "Nowadays I can design website and apps using tools like adobe XD , Photoshop and Illustrtor", "Then I can bring those ideas to life using", "HTML, CSS, JavaScript, React, React Native", "I also handle backend using REST API and connecting to databases such as postgres and mysql"
                , "then what are your goals?", "I still want to do application development but I am planning to learn AI and machine learning", "I believe these will be the future and I want to contribute in someway", "Anyway, you can see my work.. ill send you links you can click on it", "azzahabie.dev/mywork", "azzahabie.dev/mycontact", "Thank you for your time", "Back to home"],
            timer: 200,
            time : 1000
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ animationRemoved: true })
            this.setState({ startAnim: true })
        }, 3000);
        this.checkHeight()
    }

    checkHeight = () => {
        setInterval(()=>{
        console.log(`running checkheight`)
        if(document.body.scrollHeight > window.screen.height){
            window.scrollTo(0,document.body.scrollHeight)
        }}, 1000);}

    render() {
        return (
            <MainContainer>
                {!this.state.animationRemoved ?
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
                        {
                            this.state.myWords.map((item, index) => {
                               
                                if (index == 8) {
                                    return (
                                        <Delayed waitBeforeShow={this.state.timer * index}>
                                            <SenderChatContainer>
                                                <SenderChatBox>{item}</SenderChatBox>
                                            </SenderChatContainer>
                                        </Delayed>)
                                }
                                return (
                                    <Delayed waitBeforeShow={this.state.timer * index}>
                                        <ChatContainer>
                                            <ChatBox>{item}</ChatBox>
                                        </ChatContainer>
                                    </Delayed>)
                            })
                        }
                    </SubContainer>
                }


            </MainContainer>
        )
    }
}
