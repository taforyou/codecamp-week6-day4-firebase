import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 10,
      listItems: ["111", "2222"],
      todos: []
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child("speed");
    const todoRef = rootRef.child("todos");

    speedRef.on("value", snap => {
      const vals = snap.val();
      if (vals) {
        this.setState({ speed: snap.val() });
      }
    });

    todoRef.on("value", snap => {
      const vals = snap.val();
      if (vals) {
        this.setState({ todos: snap.val() });
      }
    });

  }

  writeNewPost(title) {
    // A post entry.

    console.log(this.state.todos);

    var postData = {
      title: title
    };

    // Get a key for a new Post.
    var newPostKey = firebase
      .database()
      .ref()
      .child("todos")
      .push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates["/todos/" + newPostKey] = postData;
    //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase
      .database()
      .ref()
      .update(updates);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
        {this.state.listItems.map((value, index) => {
          return <h1 key={index + value}>{value}</h1>;
        })}

        {Object.entries(this.state.todos).map(([key, value], index) => {
          return <h2 key={key}>{value.title}</h2>;
        })}
        <button onClick={() => this.writeNewPost("Test112233")}>
          Test112233
        </button>
      </div>
    );
  }
}

export default App;
