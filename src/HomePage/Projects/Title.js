import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.div`
  color: #282c34;

  font-weight: bold;
  font-size: 2rem;

  margin-top: 3.125rem;
  margin-bottom: 3.125rem;
`;

export default class Title extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}
