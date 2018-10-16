import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const Img = styled.a`
  width: 100%;
  height: 391px;
  max-width: 757px;

  position: relative;

  background-size: cover;

  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.65);

  filter: alpha(opacity=40); /* msie */
  background-color: #000;

  margin-top: 4.4rem;
  margin-bottom: 4.4rem;

  color: white;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 5.6rem;
  padding-right: 5.6rem;
  padding-bottom: 5.6rem;

  transition: all 0.35s ease;

  &:nth-child(odd) {
    transform: translateX(25px);
    text-align: left;
  }

  &:nth-child(even) {
    transform: translateX(-25px);

    align-items: flex-end;

    text-align: right;
  }

  @media only screen and (max-width: 1199px) {
    max-width: 621px;
    width: 100%;
  }

  @media only screen and (max-width: 1023px) {
    &:nth-child(odd),
    &:nth-child(even) {
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 1000px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 899px) {
    height: 331px;
  }

  @media only screen and (max-width: 850px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media only screen and (max-width: 800px) {
    width: calc(100% - 16rem);
  }

  @media only screen and (max-width: 660px) {
    height: 280px;

    margin-top: 2rem;
    margin-bottom: 2rem;

    text-align: center;
    align-items: center;
    justify-content: center;

    padding-top: 1rem
    padding-bottom: 1rem;
    
    padding-left: 1rem;
    padding-right: 1rem;

    width: calc(100% - 4rem);

    &:nth-child(odd),
    &:nth-child(even) {
      text-align: center;

      align-items: center;
      justify-content: center;
    }
  }
`;

const Filter = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: #1c1d25;
  opacity: 0.7;

  z-index: -1;
`;

const Title = styled.div`
  font-size: 3.3rem;
  font-weight: bold;

  margin-bottom: 1rem;

  text-align: right;

  @media only screen and (max-width: 899px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 699px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 660px) {
    text-align: center;
  }
`;

const Description = styled.div`
  font-style: italic;
  font-size: 1.2rem;

  margin-bottom: 1rem;

  @media only screen and (max-width: 660px) {
    font-size: 1rem;
  }
`;

export default class Project extends Component {
  render() {
    const { image, title, description, link } = this.props.project;

    return (
      <Img
        href={link}
        target="_blank"
        style={{
          backgroundImage: `url(
            ${image}
          )`
        }}
        alt={title}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button text="View Project" slide="false" />
        <Filter />
      </Img>
    );
  }
}
