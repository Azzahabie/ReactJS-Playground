import React, { Component } from "react";
import {
  Homepage,
  InProgress
} from "./components";
import {
  GlobalStyle,
  GlobalCenteredDiv,
  GlobalMainContainer,
} from "./globalStyles";


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      readNotification : false
    }
  }
  componentDidMount(){
    document.body.style.margin = 0
    document.body.style.padding = 0
  }
  test = () =>{
    this.setState({readNotification:true})
  }
  render() {
    return (
      <>
            {!this.state.readNotification ?
            
            <InProgress testFunc={this.test}>
              
            </InProgress>
            
            :  <Homepage> </Homepage>}
    
      </>
    )
  }
}

