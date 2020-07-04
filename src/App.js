import React, { Component } from "react";

import Navbar from "./Navigation/Navbar";

import Task from "./Task/Task";

import "./App.css";

class App extends Component {
  render() {
    // return <p>React Task Manager</p>;
    return (
      <div>
        <Navbar />
        <Task title="Test Card" />
      </div>
    );
  }
}

export default App;
