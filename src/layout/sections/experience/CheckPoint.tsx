import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

type CheckPointPropsType = {
  year: string;
  text: string;
};

const CheckPoint = (props: CheckPointPropsType) => {
  return (
    <StyledCheckPoint>
      <Frame>
        <Title>{props.year}</Title>
        <Description>{props.text}</Description>
      </Frame>
    </StyledCheckPoint>
  );
};

export default CheckPoint;

const StyledCheckPoint = styled.div`
  width: 400px;
  padding-top: 2em;
  padding-bottom: 2em;
  position: relative;

  &:nth-child(odd) {
    border-left: 5px solid ${theme.colors.primary};
    padding-left: 3em;
    transform: translateX(198px);
  }

  &:nth-child(even) {
    border-right: 5px solid ${theme.colors.primary};
    padding-right: 3em;
    transform: translateX(-198px);
  }

  &:nth-child(odd)::before,
  &:nth-child(even)::before {
    content: "";
    background-color: ${theme.colors.primary};
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
    background-color: ${theme.colors.primary};
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
  border: 2px solid ${theme.colors.primary};
  border-radius: 1em;
  padding: 1.5em;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Description = styled.p``;