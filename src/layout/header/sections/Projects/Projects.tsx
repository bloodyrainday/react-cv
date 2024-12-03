import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button/Button";
import { Project } from "./project/Project";
import projectImage from "../../../../assets/images/picture_2.png";

type Props = {};

export const Projects = (props: Props) => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>

      <FlexWrapper justify="space-between">
        <Project
          title="TITLE PROJECT"
          src={projectImage}
          technologies={["Javascript", "PostgreSQL", "React", "Redux"]}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Project
          title="I N S I G H T G R A M"
          src={projectImage}
          technologies={["Javascript", "React Native", "Redux"]}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </FlexWrapper>

      <Button title="See all projects" />
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: 140px 180px 180px 189px;
  background-color: lightblue;
  min-height: 100vh;
`;
