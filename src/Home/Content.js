import React, { Component } from "react";
import { Arrow } from "../common/Arrow";
import styled from "styled-components";
import {
  Spring,
  animated,
  AnimatedValue,
  controller as spring
} from "react-spring";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 380px;

  position: absolute;

  display: flex;
  justify-content: center;

  overflow: hidden;
`;

const ContentDiv = styled.div`
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
  display: inline-block;

  background: linear-gradient(270deg, #f06449, #ef3636);
  transition: background 0.25s ease;

  &:hover {
    background: linear-gradient(270deg, #f06449, #ef3636);
  }
`;

const AboutText = styled.div`
  z-index: 2;
  position: relative;

  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  overflow: hidden;
`;

const BottomArrowWrapper = styled.div`
  position: absolute;
  z-index: 10;

  bottom: -9px;

  width: 40px;
  height: 55px;
`;

const BottomArrow = styled.a`
  position: absolute;

  cursor: pointer;

  width: 1px;
  height: 45px;

  padding-left: 20px;
  padding-right: 20px;

  padding-bottom: 0px;

  animation: arrowUnHover .3s forwards;

  &:after {
    animation: arrowUnHoverAfter .3s forwards;
  }
  &:before {
    animation: arrowUnHoverBefore .3s forwards;      
  }

  &:hover {
    animation: arrowHover .3s forwards;

    &:hover:after {
      animation: arrowHoverAfter .3s forwards;
    }
    &:hover:before {
      animation: arrowHoverBefore .3s forwards;      
    }
  }

  &:before {
    content: "";
    transform: rotate(-90deg);
    opacity: 1;
    content: "";
    position: absolute;
    background: #f3f3f3;
    height: 1px;
    width: 10px;
    left: 16px;
    bottom: 3px;
    margin-right: 0;
    backface-visibility: hidden;
    transition: all 0.3s;
    animation: animation: arrowUnHoverBefore .3s forwards;    
  }

  &:after {
    content: "";
    transform: rotate(-90deg);
    opacity: 1;
    content: "";
    position: absolute;
    background: #f3f3f3;
    height: 1px;
    bottom: 3px;       
    left: 16px 
    width: 10px;
    margin-right: 0;
    backface-visibility: hidden;
    transition: all 0.3s;
    animation: animation: arrowUnHoverAfter .3s forwards;
  }
`;

const CssArrow = styled.div`
  width: 100%;
  height: 100%;

  background: white;
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

export default class Content extends Component {
  render() {
    return (
      <ContentWrapper className="ContentWrapper">
        <ContentDiv className="Content">
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
              Web Developer
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
                <AboutText>My Work</AboutText>{" "}
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
                <Arrow />
              </span>
            </AboutButton>
          </Introduction>
        </ContentDiv>
        <BottomArrowWrapper>
          <BottomArrow href="#" className="button-icon Arrow">
            <CssArrow />
          </BottomArrow>
        </BottomArrowWrapper>
      </ContentWrapper>
    );
  }
}
