import React, { Component } from "react";
import { Spring, animated } from "react-spring";
import styled from "styled-components";
import Delay from "react-delay-render";
import Logo from "./Logo";

const NavContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  max-height: 60px;

  // remove this and put on individual items
  z-index: 5;

  display: flex;
  justify-content: center;

  padding-top: 1rem;
`;

const NavLinks = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
`;

const NavLink = styled.a`
  color: #b0b2c3;

  padding-bottom: 4px;
  padding-top: 4px;

  font-weight: bold;
  font-size: 1.2rem;

  margin-left: 2.5rem;

  transition: all 1s ease;

  position: relative;

  display: inline-block;

  overflow: hidden;

  &:after {
    content: " ";
    width: 100%;
    height: 4px;
    background: #f25757;
    position: absolute;
    left: 0;
    bottom: 0;
    animation: Underline3 0.3s forwards;
  }
  &:before {
    content: " ";
    width: 100%;
    height: 4px;
    background: #235aa6;
    position: absolute;
    left: 0;
    bottom: 0;
    animation: Underline4 0.6s forwards;
  }

  &:hover {
    color: #fff;

    &:hover:after {
      content: " ";
      width: 100%;
      height: 4px;
      background: #f25757;
      position: absolute;
      left: 0;
      bottom: 0;
      animation: Underline 0.3s forwards;
    }

    &:hover:before {
      content: " ";
      width: 100%;
      height: 4px;
      background: #235aa6;
      position: absolute;
      left: 0;
      bottom: 0;
      animation: Underline2 0.3s forwards;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <NavContent>
        <div className="header_content">
          <Logo />
          <NavLinks>
            <NavLink className="NavLink" href="#work">
              Projects
            </NavLink>
            <NavLink className="NavLink" href="#contact">
              Contact
            </NavLink>
          </NavLinks>
        </div>
      </NavContent>
    );
  }
}

export default Delay({ delay: 1500 })(Header);
