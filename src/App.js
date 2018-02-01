import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 10
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
