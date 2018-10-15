import React, { Component } from "react";
import Title from "./Title";
import Project from "./Project";
import Delay from "react-delay-render";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Center = styled.div`
  text-align: center;

  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 4.5rem;
`;

const CenterStyleLine = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  z-index: -1;

  display: flex;
  justify-content: center;

  top: 0;
`;

const CenterLine = styled.div`
  width: 5px;
  height: 100%;

  background: #ededed;
`;

const ProjectItemsWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Projects extends Component {
  render() {
    const ProjectItems = [
      {
        id: 1,
        title: "DevConnector",
        image: require("./images/thawing-island-18705.herokuapp.com-dashboard.png"),
        description: "Linkedin-esque full stack MERN application",
        link: "https://github.com/logmannn/devconnector"
      },
      {
        id: 2,
        title: "DevConnector",
        image: require("./images/thawing-island-18705.herokuapp.com.png"),
        description: "Description",
        link: "https://github.com/logmannn/devconnector"
      }
    ];

    return (
      <Center id="projects" className="main_content">
        <CenterStyleLine>
          <CenterLine />
        </CenterStyleLine>
        <Title text="Latest Works" />
        <ProjectItemsWrapper className="ProjectItemsWrapper">
          {ProjectItems.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </ProjectItemsWrapper>
      </Center>
    );
  }
}

export default Delay({ delay: 1500 })(Projects);
