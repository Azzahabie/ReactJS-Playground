import React, { Component } from 'react'
import { SubContainer, MainContainer, GithubButton, EmailButton, TelegramButton } from '../findMe/findMe.elements'

export default class FindMe extends Component {
    constructor() {
        super()
    }
    componentDidMount() {

    }

    redirectToPlaces = (place) => {
        switch (place) {
            case "github":
                window.location.replace("https://github.com/Azzahabie")
                break;
            case "email":
                window.location = "mailto:azzahabie@gmail.com?subject=Hey tell me more!";
                break;
            case "telegram":
                window.location = "https://telegram.me/AzaBie";
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <MainContainer>
                <SubContainer>
                    <GithubButton onClick={() => this.redirectToPlaces("github")}>github</GithubButton>
                    <EmailButton onClick={() => this.redirectToPlaces("email")}>email</EmailButton>
                    <TelegramButton onClick={()=>{this.redirectToPlaces("telegram")}}>telegram</TelegramButton>
                </SubContainer>
            </MainContainer>
        )
    }
}
