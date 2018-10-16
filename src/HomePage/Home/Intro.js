import React, { Component } from "react";
import LargeLetters from "./LargeLetters";
import Delay from "react-delay-render";
import Social from "./Social";
import CanvasBackground from "./CanvasBackground";
import Content from "./Content";

class Intro extends Component {
  render() {
    return (
      <>
        <CanvasBackground />
        <Content />
        <LargeLetters />
        <Social />
      </>
    );
  }
}

export default Delay({ delay: 1500 })(Intro);
