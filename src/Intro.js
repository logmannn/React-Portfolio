import React, { Component } from "react";
import styled from "styled-components";
import LargeLetters from "./LargeLetters";
import Delay from "react-delay-render";
import {
  Spring,
  animated,
  AnimatedValue,
  controller as spring
} from "react-spring";
import CanvasBackground from "./CanvasBackground";
import Matrix from "./Matrix";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1170px;

  color: #fff;

  align-items: center;
  display: flex;

  @media only screen and (max-width: 1024px) {
    max-width: 975px !important;
  }

  @media only screen and (max-width: 1199px) {
    max-width: 995px;
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 60px;

  position: relative;

  z-index: 4;

  pointer-events: none;

  overflow: hidden;
`;

const AboutButton = styled.div`
  white-space: nowrap;

  margin-bottom: 1rem;

  display: block;

  overflow: hidden;

  position: relative;

  font-weight: bold;

  cursor: pointer;
  pointer-events: all;

  max-width: 148px;

  transition: max-width 0.25s ease;

  &:hover {
    max-width: 155px;
  }
`;

const Title = styled.div`
  font-style: italic;

  display: table;

  overflow: hidden;

  position: relative;

  pointer-events: all;
`;

const DevName = styled.div`
  font-weight: bold;

  display: table;

  overflow: hidden;

  position: relative;

  padding-bottom: 0;

  pointer-events: all;
`;

const SlideAnimation = styled(animated.div)`
  background: white;

  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  display: inline-block;

  transition: transform cubic-bezier(0.03, 0.05, 0.84);
`;

const AboutButtonAnimation = styled(animated.div)`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  display: inline-block;

  background: linear-gradient(270deg, #f06449, #ef3636);
  transition: background 0.25s ease;

  &:hover {
    background: linear-gradient(270deg, #f06449, #ef3636);
  }
`;

const Arrow = styled.svg`
  width: 36px;
  position: absolute;

  top: 3px;
  right: 0;

  fill: white;
`;

const animation = new AnimatedValue();
const hover = () =>
  spring(animation, {
    to: "linear-gradient(270deg, #ef3636, #f06449)"
  }).start();
const unhover = () =>
  spring(animation, {
    to: "linear-gradient(270deg, #f06449, #ef3636)"
  }).start();

class Intro extends Component {
  render() {
    return (
      <>
        <CanvasBackground />
        <ContentWrapper>
          <Content className="Content">
            <Introduction className="Introduction">
              <DevName id="devName" className="devName rem2margin">
                Logan Tanous
                <Spring
                  delay={200}
                  from={{ transform: "translateX(0%)" }}
                  to={{ transform: "translateX(101%)" }}
                >
                  {({ transform }) => (
                    <SlideAnimation
                      style={{
                        transform
                      }}
                    />
                  )}
                </Spring>
              </DevName>
              <Title className="relative noOverflow rem2margin">
                <Matrix
                  text="Web Developer"
                  columnHeight="3"
                  framesPerSecond="30"
                />
                <Spring
                  delay={200}
                  from={{ transform: "translateX(0%)" }}
                  to={{ transform: "translateX(101%)" }}
                >
                  {({ transform }) => (
                    <SlideAnimation
                      style={{
                        transform
                      }}
                    />
                  )}
                </Spring>
              </Title>
              <AboutButton className="relative noOverflow">
                <AboutButtonAnimation
                  onMouseOver={hover}
                  onMouseOut={unhover}
                  style={{ background: animation }}
                >
                  About Me{" "}
                  <Spring
                    delay={200}
                    from={{ transform: "translateX(0%)" }}
                    to={{ transform: "translateX(101%)" }}
                  >
                    {({ transform }) => (
                      <SlideAnimation
                        style={{
                          transform
                        }}
                      />
                    )}
                  </Spring>
                </AboutButtonAnimation>

                <span className="button-icon Arrow">
                  <Arrow
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 476.213 476.213"
                  >
                    <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607" />
                  </Arrow>
                </span>
              </AboutButton>
            </Introduction>
          </Content>
        </ContentWrapper>
        <LargeLetters />
      </>
    );
  }
}

// export default Intro;
export default Delay({ delay: 1500 })(Intro);
