import React, { Component } from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classnames from "classnames";
import {
  Spring,
  animated,
  AnimatedValue,
  controller as spring
} from "react-spring";
import { Arrow } from "./Arrow";

const AboutButton = styled.div`
  white-space: nowrap;

  margin-bottom: 1rem;

  display: block;

  position: relative;

  font-weight: bold;

  cursor: pointer;
  pointer-events: all;

  max-width: 148px;

  padding-right: 0;

  transition: all 0.25s ease;

  &:hover {
    // max-width: 155px;
    padding-right: 0.5rem;
  }
`;

const AboutButtonAnimation = styled(animated.div)`
  display: inline-block;

  background: linear-gradient(270deg, #f06449, #ef3636);
  transition: background 0.25s ease;

  &:hover {
    background: linear-gradient(270deg, #f06449, #ef3636);
  }
`;

const AboutText = styled(AnchorLink)`
  z-index: 2;
  position: relative;

  display: flex;

  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  overflow: hidden;

  color: white;

  width: 100%;
`;

const AboutTextDiv = styled.div`
  z-index: 2;
  position: relative;

  display: flex;

  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  overflow: hidden;

  color: white;
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

export default class Button extends Component {
  render() {
    return (
      <AboutButton
        className={"relative " + (this.props.slide === "true" && "noOverflow")}
      >
        <AboutButtonAnimation
          onMouseOver={hover}
          onMouseOut={unhover}
          style={{ background: animation }}
        >
          {this.props.slide === "true" ? (
            <>
              <AboutText href="#projects">{this.props.text}</AboutText>
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
            </>
          ) : (
            <AboutTextDiv>{this.props.text}</AboutTextDiv>
          )}
        </AboutButtonAnimation>
        <span
          className={
            "button-icon Arrow " +
            (this.props.slide === "false" && "ButtonMarginRight")
          }
        >
          <Arrow />
        </span>
      </AboutButton>
    );
  }
}
