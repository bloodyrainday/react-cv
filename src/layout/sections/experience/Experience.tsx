import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import TimeLine from "./TimeLine";
import { SectionTitle } from "../../../components/SectionTitle";

type Props = {};

const experience = [
  {
    id: 0,
    year: "2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    year: "2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    year: "2024",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    year: "2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.",
  },
];

const Experience = (props: Props) => {
  return (
    <StyledExperience>
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <TimeLine experience={experience} />
      </Container>
    </StyledExperience>
  );
};

export default Experience;

const StyledExperience = styled.section``;
