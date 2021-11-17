import React, { Component } from 'react'
import { CvsHeader, GridContainer, Grids, KcollectHeader, MainContainer, Portfolio, PosterHeader, RealSale, RiderPalHeader, SpGamesHeader, SubContainer } from './myWork.elements'

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
                <h2>My Work</h2>
                    <GridContainer>
                        <RealSale></RealSale>
                        <Portfolio></Portfolio>
                        <PosterHeader></PosterHeader>
                        <SpGamesHeader></SpGamesHeader>
                        <RiderPalHeader></RiderPalHeader>
                        <CvsHeader></CvsHeader>
                        <KcollectHeader></KcollectHeader>
                    </GridContainer>
                </SubContainer>
            </MainContainer>
        )
    }
}
