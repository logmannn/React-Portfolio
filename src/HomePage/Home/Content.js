import React, { Component } from "react";
import Button from "../../common/Button";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Spring, animated } from "react-spring";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 380px;

  position: absolute;

  display: flex;
  justify-content: center;

  overflow: hidden;

  left: 0;
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

const BottomArrowWrapper = styled.div`
  position: absolute;
  z-index: 10;

  bottom: -9px;

  width: 40px;
  height: 55px;
`;

const BottomArrow = styled(AnchorLink)`
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
            <Button text="My Work" slide="true" />
          </Introduction>
        </ContentDiv>
        <BottomArrowWrapper>
          <BottomArrow href="#projects" className="button-icon Arrow">
            <CssArrow />
          </BottomArrow>
        </BottomArrowWrapper>
      </ContentWrapper>
    );
  }
}
