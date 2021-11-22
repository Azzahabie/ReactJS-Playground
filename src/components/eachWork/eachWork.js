import React, { Component } from 'react'
import { AboutContainer, CarouselContainer, MainContainer, MyFooter, MyTitle, SubContainer } from './eachWork.elements'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import riderPalImages from './riderpal';
import realsaleImages from './realsale';
import portforlioImages from './portforlio';

export default class EachWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chosen: 1,
            'riderpal': riderPalImages,
            'realsale': realsaleImages,
            'portforlio': portforlioImages,
            loading: true
        }
    }
    componentDidMount() {
        document.body.style.margin = 0
        document.body.style.padding = 0
        var url = new URLSearchParams(document.location.search.substring(1));
        var params = url.get("item")
        this.setState({ chosen: params })
        this.setState({ loading: false })
    }

    printData = () => {
        let x = null
        if (this.state.chosen.match(/riderpal/i)) {
            x = this.state.chosen.match(/riderpal/i)
            return (this.state[x].map((item) => {
                return (
                    <>
                        <div>
                            <img src={item} />
                        </div>
                    </>
                )
            })
            )
        }
        else if (this.state.chosen.match(/realsale/i)) {
            x = this.state.chosen.match(/realsale/i)
            return (this.state[x].map((item) => {
                return (
                    <>
                        <div>
                            <img src={item} />
                        </div>
                    </>
                )
            })
            )
        }
        else if (this.state.chosen.match(/portforlio/i)) {
            x = this.state.chosen.match(/portforlio/i)
            return (this.state[x].map((item) => {
                return (
                    <>
                        <div>
                            <img src={item} />
                        </div>
                    </>
                )
            })
            )
        }
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
                            {
                                this.state.loading ? null : this.printData()


                            }
                        </Carousel>
                    </CarouselContainer>
                </SubContainer>
                <SubContainer>
                    <div>
                        tags
                    </div>
                    <AboutContainer>
                        <p>Hello this is my project</p>
                    </AboutContainer>
                </SubContainer>
                <MyFooter></MyFooter>

            </MainContainer>
        )
    }
}
