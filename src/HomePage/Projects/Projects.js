import React, { Component } from "react";
import Title from "./Title";
import Delay from "react-delay-render";
import styled from "styled-components";

const Center = styled.div`
  text-align: center;

  width: 100%;

  display: flex;

  justify-content: center;

  position: relative;
`;

const CenterStyleLine = styled.div`
  width: 5px;
  height: 100%;

  background: #f9f9f9;
  position: absolute;
`;

class Projects extends Component {
  render() {
    return (
      <Center>
        <CenterStyleLine />
        <Title text="Latest Works" />
      </Center>
    );
  }
}

export default Delay({ delay: 1500 })(Projects);
