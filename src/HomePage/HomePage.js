import React, { Component } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;

  justify-content: center

  display: flex;
`;

export default class HomePage extends Component {
  render() {
    return (
      <Content>
        <div className="main_content">
          <Home />
          <Projects />
        </div>
      </Content>
    );
  }
}
