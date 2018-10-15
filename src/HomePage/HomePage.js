import React, { Component } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Home />
        <Projects />
      </>
    );
  }
}
