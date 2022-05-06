import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./Globals";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appConst: [],
    };
  }

  render() {
    return (
      <div>
        <GlobalContext.Provider value={this.state.appConst}>
          <Router>
            <Routes />
          </Router>
        </GlobalContext.Provider>
      </div>
    );
  }
}
