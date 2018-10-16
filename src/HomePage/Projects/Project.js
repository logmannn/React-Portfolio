import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const Img = styled.a`
  width: 100%;
  height: 480px;
  max-width: 936px;
  max-height: 480px;

  position: relative;

  background-size: cover;

  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.65);

  filter: alpha(opacity=40); /* msie */
  background-color: #000;

  margin-top: 4.5rem;
  margin-bottom: 4.5rem;

  color: white;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 5.6rem;
  padding-right: 5.6rem;
  padding-bottom: 5.6rem;

  &:nth-child(odd) {
    transform: translateX(25px);
  }

  &:nth-child(even) {
    transform: translateX(-25px);

    align-items: flex-end;
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
`;

const Description = styled.div`
  font-style: italic;
  font-size: 1.2rem;

  margin-bottom: 1rem;
`;

export default class Project extends Component {
  render() {
    const { image, title, description, link } = this.props.project;

    return (
      <>
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
      </>
    );
  }
}
