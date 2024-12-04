import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon/Icon";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>

      <FlexWrapper wrap={"wrap"} gap="60px" justify="space-between">
        <Skill skillTitle="JAVASCRIPT" iconId="jsIcon"></Skill>
        <Skill skillTitle="TYPESCRIPT" iconId="tsIcon"></Skill>
        <Skill skillTitle="REACT" iconId="reactIcon"></Skill>
        <Skill skillTitle="REDUX" iconId="reduxIcon"></Skill>
        <Skill skillTitle="STYLED COMPONENTS" iconId="scIcon"></Skill>
        <Skill skillTitle="GIT" iconId="gitIcon"></Skill>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 140px 171px 180px 189px;
  background-color: lightgreen;
`;
