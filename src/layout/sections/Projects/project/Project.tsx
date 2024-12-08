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
      <Title>{props.title}</Title>
      <Technologies technologies={props.technologies} />
      <Text>{props.text}</Text>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 522px;
  height: 636px;
  background-color: #f5f2fd;
`;

const Image = styled.img``;

const Title = styled.h3``;

const Text = styled.p``;
