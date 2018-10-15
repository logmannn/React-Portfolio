import React, { Component } from "react";
import { Linkedin, Github, Email } from "../../common/SocialIcons";
import styled from "styled-components";

const SocialCenter = styled.div`
  height: 100%;
  width: 130px;

  position: absolute;

  top: 0;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1599px) {
    width: 90px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const SocialWrapper = styled.div`
  position: relative;
  width: 130px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcon = styled.a`
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  opacity: 0.75

  fill: white;

  &:hover {
    opacity: 1
    transition: opacity .2s ease-out;
  }
`;

export default class Social extends Component {
  render() {
    return (
      <SocialCenter>
        <SocialWrapper>
          <SocialIcon href="https://github.com/logmannn">
            <Github />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/logantanous/">
            <Linkedin />
          </SocialIcon>
          <SocialIcon href="#">
            <Email />
          </SocialIcon>
        </SocialWrapper>
      </SocialCenter>
    );
  }
}
