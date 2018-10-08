import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
// import rect from "./images/testingpath.svg";
// import { Spring, animated } from "react-spring";
// import { interpolate } from "flubber";
// import { GradientPinkRed as Gradient } from "@vx/gradient";
import MtSvgLines from "react-mt-svg-lines";

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

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;

const AboutButton = styled.div`
  padding: 1rem;
`;

const LettersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1170px;
  justify-content: center;
  // margin-left: 100px;
`;

const LetterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  z-index: -1;
  position: relative;
  width: 100%;
`;

const LetterLWrapper = styled(MtSvgLines)`
  height: 100%;
  max-height: 405px;
  position: absolute;
  bottom: 0;
  left: -60px;
`;

const LetterL = styled.svg`
  height: 100%;
  max-height: 410px;
  bottom: 0;
  position: absolute;

  @media only screen and (max-width: 1599px) {
    margin-left: 1.8rem;
    max-height: 190px;
  }
`;

const LetterT = styled(MtSvgLines)`
  position: absolute;
  top: 0;
  left: 0;
`;

const LettersCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -1;
`;

const Title = styled.div`
  font-style: italic;
`;

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0
  //   };
  // }

  render() {
    return (
      <div className="App">
        <ContentWrapper>
          <Content>
            <Intro>
              <h1 className="rem2margin">Logan Tanous</h1>
              <Title className="rem2margin">Web Developer</Title>
              <AboutButton>About Me</AboutButton>
            </Intro>
          </Content>
        </ContentWrapper>
        <LettersCenter>
          <LettersWrapper>
            <LetterWrapper>
              <div className="letter">
                <LetterLWrapper
                  className="overlay"
                  animate={true}
                  duration={2000}
                  style={{ height: "100%" }}
                >
                  <LetterL viewBox="0 9 8 12" style={{ height: "100%" }}>
                    <defs>
                      <linearGradient
                        x1=".258%"
                        y1="49.75%"
                        x2="101.258%"
                        y2="49.75%"
                        id="bgGradient"
                      >
                        <stop offset="0" stopColor="#2D2E83" />
                        <stop offset="1" stopColor="#1D71B8" />
                      </linearGradient>
                    </defs>

                    <clipPath id="cut-off-top">
                      <polygon points="0,21 7.3,21 8,18.65 7,9.5 2,9.5" />
                    </clipPath>
                    <path
                      id="l"
                      stroke="url(#bgGradient)"
                      strokeWidth="1.8"
                      fill="none"
                      strokeLinecap="square"
                      style={{ fill: "url(#linear-gradient)" }}
                      d="M
                5,10L
                2,20L
                7,20"
                      clipPath="url(#cut-off-top)"
                    />
                  </LetterL>
                </LetterLWrapper>
                <LetterT
                  className="overlay"
                  animate={true}
                  duration={2000}
                  style={{ height: "100%" }}
                >
                  <svg viewBox="2.8 6.8 17.4 14" style={{ height: "100%" }}>
                    <defs>
                      <linearGradient
                        x1=".258%"
                        y1="49.75%"
                        x2="101.258%"
                        y2="49.75%"
                        id="bgGradient"
                      >
                        <stop offset="0" stopColor="#2D2E83" />
                        <stop offset="1" stopColor="#1D71B8" />
                      </linearGradient>
                    </defs>
                    <clipPath id="cut-off-bottom">
                      <polygon points="3.3,8.95 3.88,7 19.87,7 18.36,12 10,24" />
                    </clipPath>
                    <path
                      stroke="url(#bgGradient)"
                      strokeWidth="1.9"
                      fill="none"
                      d="M10,22L14.205,8L3,8L20,8"
                      clipPath="url(#cut-off-bottom)"
                    />
                  </svg>
                </LetterT>
              </div>
            </LetterWrapper>
          </LettersWrapper>
        </LettersCenter>
        {/* </ContentWrapper> */}
      </div>
    );
  }
}

export default App;
