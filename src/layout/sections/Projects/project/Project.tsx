import React from "react";
import styled from "styled-components";
import { Technologies } from "./Technologies";
import { theme } from "../../../../styles/Theme.styled";

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

const StyledProject = styled.article`
  max-width: 522px;
  width: 100%;
  background-color: #f5f2fd;
  border-radius: 6px;
  box-shadow: 2px 2px 32px 0px #28262c26;
`;

const ProjectInfo = styled.div`
  padding: 29px 26px 31px 26px;

  @media ${theme.media.mobile} {
    padding: 16px 17px 20px 17px;
  }
`;

const Image = styled.img`
  border-radius: 6px;
  width: 100%;
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
