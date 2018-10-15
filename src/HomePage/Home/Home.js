import React, { Component } from "react";
import Intro from "./Intro";
import SlideCover from "./SlideCover";
import Loading from "./Loading";
import Header from "./Header";
import styled from "styled-components";

const InitialBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 380px;
  background: #1c3e6d;
`;

class Home extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    return (
      <div className="App">
        <InitialBackground />
        <Loading />
        <SlideCover />
        <Header />
        <Intro />
      </div>
    );
  }
}

export default Home;
