import React, { Component } from "react";
import { Spring, animated } from "react-spring";
import Delay from "react-delay-render";
import styled from "styled-components";

const coverProgress = progress => `${Math.round(progress * 100)}%`;
const Cover = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  background: #1c1d25;
  text-align: right;
  height: 100%;
  z-index: 2;
`;

class SlideCover extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    let { value } = this.state;
    return (
      <Spring native to={{ progress: value }}>
        {({ progress }) => (
          <Cover style={{ width: progress.interpolate(coverProgress) }} />
        )}
      </Spring>
    );
  }
}

export default Delay({ delay: 300 })(SlideCover);
