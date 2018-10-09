import React, { Component } from "react";
import "./App.css";
import Intro from "./Intro";
import SlideCover from "./SlideCover";
import Loading from "./Loading";
// import { Spring } from "react-spring";
// import { Spring, animated } from "react-spring";
// import styled from "styled-components";

class App extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    return (
      <div className="App">
        <Loading />
        <SlideCover />
        <Intro />
      </div>
    );
  }
}

export default App;
