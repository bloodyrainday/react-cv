import React from "react";
import styled from "styled-components";

type TimeLinePropsType = {
  experience: Array<Object>;
};

const TimeLine = (props: TimeLinePropsType) => {
  return (
    <StyledTimeLine>
      <CheckPoint>
        <Frame>
          <Title>2022</Title>
          <Description>blablabalbalbalabalbalabalbal</Description>
        </Frame>
      </CheckPoint>

      <CheckPoint>
        <Frame>
          <Title>2022</Title>
          <Description>blablabalbalbalabalbalabalbal</Description>
        </Frame>
      </CheckPoint>

      <CheckPoint>
        <Frame>
          <Title>2022</Title>
          <Description>blablabalbalbalabalbalabalbal</Description>
        </Frame>
      </CheckPoint>
    </StyledTimeLine>
  );
};

export default TimeLine;

const StyledTimeLine = styled.div`
  margin: 5em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckPoint = styled.div`
  width: 400px;
  padding-top: 2em;
  padding-bottom: 2em;
  position: relative;

  &:nth-child(odd) {
    border-left: 5px solid black;
    padding-left: 3em;
    transform: translateX(198px);
  }

  &:nth-child(even) {
    border-right: 5px solid black;
    padding-right: 3em;
    transform: translateX(-198px);
  }

  &:nth-child(odd)::before,
  &:nth-child(even)::before {
    content: "";
    background-color: black;
    width: 3em;
    height: 3px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(odd)::before {
    left: 0%;
  }

  &:nth-child(even)::before {
    right: 0%;
  }

  &:nth-child(odd) div::before,
  &:nth-child(even) div::before {
    content: "";
    background-color: black;
    width: 0.8em;
    height: 0.8em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }

  &:nth-child(odd) div::before {
    left: -0.5em;
  }

  &:nth-child(even) div::before {
    right: -0.5em;
  }
`;

const Frame = styled.div`
  border: 2px solid black;
  border-radius: 1em;
  padding: 1.5em;
`;

const Title = styled.h3``;

const Description = styled.p``;
