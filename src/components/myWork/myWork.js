import React, { Component } from 'react'
import { GridContainer, Grids, MainContainer, SubContainer } from './myWork.elements'

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
                    <GridContainer>
                        <Grids><h2>hi</h2></Grids>
                        <Grids><h2>hi</h2></Grids>
                        <Grids><h2>hi</h2></Grids>
                        <Grids><h2>hi</h2></Grids>
                    </GridContainer>
                </SubContainer>
            </MainContainer>
        )
    }
}
