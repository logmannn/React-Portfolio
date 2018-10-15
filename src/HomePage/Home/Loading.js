import React, { Component } from "react";
import { Spring, animated } from "react-spring";
import styled from "styled-components";
import Delay from "react-delay-render";

const cover = progress => `${Math.round(progress * 100)}%`;
const Cover = styled(animated.div)`
  position: relative;
  background: #fff;
  text-align: right;
  height: 100%;
  margin-bottom: 0.5rem;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 100vh;
  min-height: 380px;

  z-index: 1;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 365px;
  height: 100vh;
  justify-content: center;
`;

class Loading extends Component {
  state = { value: 0 };

  componentDidMount() {
    this.setState(({ value }) => ({ value: 1 - value }));
  }

  render() {
    let { value } = this.state;

    return (
      <Wrap>
        <Center>
          <Spring native to={{ progress: value }}>
            {({ progress }) => (
              <>
                <Cover
                  style={{
                    height: "20px",
                    maxWidth: "365px",
                    width: progress.interpolate(cover)
                  }}
                />
                <Cover
                  style={{
                    height: "20px",
                    maxWidth: "182px",
                    width: progress.interpolate(cover)
                  }}
                />
                <Cover
                  style={{
                    height: "20px",
                    maxWidth: "100px",
                    width: progress.interpolate(cover)
                  }}
                />
              </>
            )}
          </Spring>
        </Center>
      </Wrap>
    );
  }
}

export default Delay({ delay: 100 })(Loading);
