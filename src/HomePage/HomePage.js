import React, { Component } from "react";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import styled from "styled-components";
import Footer from "./Footer";

const Content = styled.div`
  width: 100%;

  justify-content: center

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class HomePage extends Component {
  render() {
    return (
      <Content>
        <div className="main_content">
          <Home />
          <Projects />
        </div>
        <Footer />
      </Content>
    );
  }
}
