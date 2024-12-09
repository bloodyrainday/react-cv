import React from "react";
import styled from "styled-components";
import { Technologies } from "./Technologies";

type ProjectPropsType = {
  title: string;
  technologies: Array<string>;
  text: string;
  src: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="project-image" />

      <ProjectInfo>
        <Title>{props.title}</Title>
        <Technologies technologies={props.technologies} />
        <Text>{props.text}</Text>
      </ProjectInfo>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 522px;
  height: 636px;
  background-color: #f5f2fd;
  border-radius: 6px;
`;

const ProjectInfo = styled.div`
  padding: 29px 26px 31px 26px;
`;

const Image = styled.img`
  border-radius: 6px;
`;

const Title = styled.h3`
  margin-bottom: 11px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
`;
