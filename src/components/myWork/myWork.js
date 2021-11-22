import React, { Component } from 'react'
import { CvsHeader, GridContainer, MyWorkHeader,MyLinks, KcollectHeader, MainContainer, Portfolio, PosterHeader, RealSale, RiderPalHeader, SpGamesHeader, SubContainer } from './myWork.elements'

export default class MyWork extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        document.body.style.margin = 0
        document.body.style.padding = 0
    }
    render() {
        return (
            <MainContainer>
                <SubContainer>
                <MyWorkHeader>My Projects</MyWorkHeader>
                    <GridContainer>
                        <MyLinks to="/eachWork?item=realsale">
                            <RealSale></RealSale>
                        </MyLinks>
                        <MyLinks to="/eachWork?item=portforlio">
                            <Portfolio></Portfolio>
                        </MyLinks>
                        <PosterHeader></PosterHeader>
                        <SpGamesHeader></SpGamesHeader>
                        <MyLinks to="/eachWork?item=riderpal">
                            <RiderPalHeader></RiderPalHeader>
                        </MyLinks>
                        <CvsHeader></CvsHeader>
                        <KcollectHeader></KcollectHeader>
                    </GridContainer>
                </SubContainer>
            </MainContainer>
        )
    }
}
