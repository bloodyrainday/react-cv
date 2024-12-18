import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { GridWrapper } from "../../../components/GridWrapper";
import { theme } from "../../../styles/Theme.styled";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <GridWrapper
          gap="60px"
          gridTemplateColumns="1fr 1fr 1fr"
          justify="center"
        >
          <Skill title="JAVASCRIPT" iconId="jsIcon"></Skill>
          <Skill title="TYPESCRIPT" iconId="tsIcon"></Skill>
          <Skill title="REACT" iconId="reactIcon"></Skill>
          <Skill title="REDUX" iconId="reduxIcon"></Skill>
          <Skill title="STYLED COMPONENTS" iconId="scIcon"></Skill>
          <Skill title="GIT" iconId="gitIcon"></Skill>
        </GridWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  margin-bottom: 140px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }

  ${SectionTitle} {
    margin-bottom: 30px;
  }

  ${GridWrapper} {
  }

  @media ${theme.media.mobile} {
    ${GridWrapper} {
      gap: 48px;
    }
  }
`;
