import React, { Component } from "react";
import styled from "styled-components";

const LettersCenter = styled.div`
  width: 82px;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 5;
`;

const LettersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  max-width: 100px;
`;

const LetterWrapper = styled.div`
  display: flex;
  height: 60px;
  z-index: 3;
  position: relative;
  width: 100%;
  pointer-events: none;
`;

const LetterLWrapper = styled.div`
  height: 100%;
  max-height: 47px;
  position: absolute;
  bottom: 0;
  left: 0px;
`;

const LetterL = styled.svg`
  height: 100%;
  max-height: 410px;
  bottom: 0;
  position: absolute;
`;

const LetterT = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
`;

export default class Logo extends Component {
  render() {
    return (
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
                  <clipPath id="cut-off-top">
                    <polygon points="0,21 7.3,21 8,18.65 7,9.5 2,9.5" />
                  </clipPath>
                  <path
                    id="l"
                    stroke="#FFF"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="square"
                    style={{ fill: "none" }}
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
                  <clipPath id="cut-off-bottom">
                    <polygon points="3.3,8.95 3.88,7 19.87,7 18.36,12 10,24" />
                  </clipPath>
                  <path
                    stroke="#FFF"
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
    );
  }
}
