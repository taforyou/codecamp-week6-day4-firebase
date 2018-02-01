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

  componentDidMount() {
    
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');

    speedRef.on('value',snap => {
      this.setState({speed : snap.val()});
    });
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
