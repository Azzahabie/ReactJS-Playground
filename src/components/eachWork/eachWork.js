import React, { Component } from 'react'
import { AboutContainer, CarouselContainer, CarouselDiv,  MainContainer, MyFooter, MyTitle, SubContainer } from './eachWork.elements'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import riderPalImages from './riderpal';
import realsaleImages from './realsale';
import portforlioImages from './portforlio';
import antismokeImages from './antismoke'
import spgamesImages from './spgames';
import cvsImages from './cvs';
import kcollectImages from './kcollect'

import riderPalAbout from './riderpalimages/riderpalAbout';
import realsaleAbout from './realsaleimages/realsaleAbout';
import portforlioabout from './portfolioimages/portforlioabout'
import antismokeabout from './antismokeimages/antismokeabout';
import spgamesAbout from './spgamesimages/spgamesabout';
import cvsAbout from './cvsImages/cvsabout';
import kcollectAbout from './kcollectImages/kcollecabout'

export default class EachWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: null,
            'kcollectabout':kcollectAbout,
            'cvsabout':cvsAbout,
            'spgamesabout':spgamesAbout,
            'antismokeabout': antismokeabout,
            'portforlioabout' : portforlioabout,
            'realsaleabout' : realsaleAbout,
            'riderpalabout' : riderPalAbout,
            'riderpal': riderPalImages,
            'realsale': realsaleImages,
            'portforlio': portforlioImages,
            'antismoke': antismokeImages,
            'spgames': spgamesImages,
            'cvs': cvsImages,
            'kcollect':kcollectImages,
            loading: true
        }
    }
    componentDidMount() {
        document.body.style.margin = 0
        document.body.style.padding = 0
        var url = new URLSearchParams(document.location.search.substring(1));
        var params = url.get("item")
        this.setState({ chosen: params, })
        this.setState({ loading: false })
    }

    printData = () => {
        let x = this.state.chosen
        return (this.state[x].map((item,index) => {
                return (
                    
                        <CarouselDiv key={index}>
                            <img src={item} key={index}/>
                        </CarouselDiv>
                    
                )
            })
            )
    }
    printAbout = () => {
        let x = this.state.chosen
        return (this.state[`${x}about`])
    }
    render() {
        return (
            <MainContainer>
                <SubContainer>
                    <MyTitle>{this.state.chosen }</MyTitle>
                </SubContainer>
                <SubContainer>
                    <CarouselContainer>
                        <Carousel stopOnHover={false} autoPlay={true} infiniteLoop={true} interval={2500}>
                            {this.state.loading ? null : this.printData()}
                        </Carousel>
                    </CarouselContainer>
                </SubContainer>
                <SubContainer>
                    <div>
                        tags
                    </div>
                    <AboutContainer>
                        {this.state.loading ? null : this.printAbout()}
                    </AboutContainer>
                </SubContainer>
                <MyFooter></MyFooter>

            </MainContainer>
        )
    }
}
