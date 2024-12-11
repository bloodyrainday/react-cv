import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>

      <FlexWrapper wrap={"wrap"} gap="60px" justify="space-between">
        <Skill title="JAVASCRIPT" iconId="jsIcon"></Skill>
        <Skill title="TYPESCRIPT" iconId="tsIcon"></Skill>
        <Skill title="REACT" iconId="reactIcon"></Skill>
        <Skill title="REDUX" iconId="reduxIcon"></Skill>
        <Skill title="STYLED COMPONENTS" iconId="scIcon"></Skill>
        <Skill title="GIT" iconId="gitIcon"></Skill>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 140px 171px 180px 189px;
`;
