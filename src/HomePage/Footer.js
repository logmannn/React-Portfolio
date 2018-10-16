import React, { Component } from "react";
import Logo from "../common/Logo";
import styled from "styled-components";
import Delay from "react-delay-render";

const FooterContent = styled.div`
  background: black;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  color: #b0b2c3;

  width: 100%;

  padding-top: 8%;
  padding-bottom: 8%;
`;

const LogoWrapper = styled.div`
  position: relative;

  width: 82px;
  height: 60px;

  margin-bottom: 2rem;
`;

const NavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 500px;
  justify-content: space-evenly;

  flex-direction: row;

  @media only screen and (max-width: 400px) {
    flex-direction: column;

    align-items: center;
  }
`;

const NavLink = styled.a`
  font-weight: bold;

  color: #ffffff;

  @media only screen and (max-width: 400px) {
    margin-bottom: 1rem;
  }
`;

class Footer extends Component {
  render() {
    return (
      <FooterContent>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavLinks className="coolUnderline">
          <NavLink href="https://github.com/logmannn">GitHub</NavLink>
          <NavLink href="https://www.linkedin.com/in/logantanous/">
            Linkedin
          </NavLink>
          <NavLink href="mailto:logantanous@gmail.com">Contact</NavLink>
        </NavLinks>
      </FooterContent>
    );
  }
}

export default Delay({ delay: 1500 })(Footer);
