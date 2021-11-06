import React, { Component } from "react";
import {
  Homepage,
  InProgress,
  AboutMe,
  NavBar
} from "./components";
import {
  GlobalStyle,
  GlobalCenteredDiv,
  GlobalMainContainer,
} from "./globalStyles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      readNotification: true
    }
  }
  componentDidMount() {
    document.body.style.margin = 0
    document.body.style.padding = 0
  }
  test = () => {
    this.setState({ readNotification: true })
  }
  render() {
    return (
      <>
        {!this.state.readNotification ?

          <InProgress testFunc={this.test}>

          </InProgress>

          :
          <Homepage>
          </Homepage>}

      </>
    )
  }
}

