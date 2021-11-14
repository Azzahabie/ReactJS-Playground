
import './inProgress.css'
import React, { Component } from 'react'

export default class InProgress extends Component {

    clickme = () => {
        this.props.testFunc()
    }
    gotoOld = () => {
        window.location.replace("https://www.azzahabie.dev/my_oldSite/")
    }
    render() {
        return (
        
            <div id="bg">
                <div id="noti">
                    <h2>HI the new site is till old the way!</h2>
                    <h2>View my old site instead 😊</h2>
                    <button onClick={() => this.gotoOld()}>View Old Site</button>
                    
                    <button onClick={()=>this.clickme()}>View New Site</button>
                </div>
            </div>
        )
    }
}


