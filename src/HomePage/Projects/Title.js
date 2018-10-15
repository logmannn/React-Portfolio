import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.div`
  color: #4a4a4a;

  font-weight: bold;
  font-size: 2.2rem;
`;

export default class Title extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}
