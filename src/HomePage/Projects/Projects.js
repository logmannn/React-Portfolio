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

  padding-top: 4.4rem;

  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 660px) {
    padding-top: 2rem;
  }
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
        title: "React Dynamic Movie Viewer",
        image: require("./images/movie-viewer.png"),
        description: "React app that shows movie information dynamically",
        link: "https://github.com/logmannn/React-dynamic-movie-viewer"
      },
      {
        id: 3,
        title: "PDX 2018 Tech Crawl Map",
        image: require("./images/PDX-2018-Tech-Crawl.png"),
        description:
          "A tool for the TechCrawl 2018 meetup users to view map items. Built with Rivets and the MapBox api",
        link: "https://github.com/logmannn/PDX-2018-Tech-Crawl"
      },
      {
        id: 4,
        title: "The Dyrt Gear Portal",
        image: require("./images/thedyrt.com-gear.png"),
        description: "A section of The Dyrt's ember site that I built",
        link: "https://thedyrt.com/gear/"
      },
      {
        id: 5,
        title: "Job Scraping",
        image: require("./images/job-scraping.png"),
        description: "A Ruby app used to search multiple job and social sites",
        link: "https://github.com/logmannn/job_scraping"
      }
    ];

    return (
      <Center id="projects" className="main_content">
        <CenterStyleLine>
          <CenterLine />
        </CenterStyleLine>
        <Title text="Latest Work" />
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
