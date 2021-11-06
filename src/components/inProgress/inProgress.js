
import './inProgress.css'
import React, { Component } from 'react'

export default class InProgress extends Component {

    clickme = () => {
        this.props.testFunc()
    }
    render() {
        return (
        
            <div id="bg">
                <div id="noti">
                    <h2>Hii im still working on it!</h2>
                    <h2> You can view if u want 😊</h2>
                    <button onClick={()=>this.clickme()}>View</button>
                </div>
            </div>
        )
    }
}


