import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

const Experience = styled.section``;

const TimeLine = styled.div`
  margin: 5em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 880px) {
    width: 80vw;
  }
`;

const CheckPoint = styled.div`
  width: 400px;
  padding-top: 2em;
  padding-bottom: 2em;
  position: relative;

  &:nth-child(odd) {
    border-left: 5px solid ${theme.colors.primary};
    padding-left: 3em;
    transform: translateX(197px);
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

  @media screen and (max-width: 880px) {
    width: 100%;

    &:nth-child(odd) {
      transform: none;
      padding-left: 0;
      border: none;
    }

    &:nth-child(even) {
      transform: none;
      padding-right: 0;
      border: none;
    }

    &:nth-child(odd)::before,
    &:nth-child(even)::before {
      width: 3px;
      height: 4em;
      top: -2em;
      left: 50%;
      transform: translateX(-50%);
    }

    &:nth-child(odd) div::before,
    &:nth-child(even) div::before {
      top: -0.5em;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Frame = styled.div`
  position: relative;
  border: 2px solid ${theme.colors.primary};
  border-radius: 1em;
  padding: 1.5em;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Description = styled.p``;

export const S = {
  Experience,
  TimeLine,
  CheckPoint,
  Frame,
  Title,
  Description,
};
