import React from "react";
import { Button } from "../../../../components/Button/Button";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme.styled";

type TechnologiesPropsType = {
  technologies: Array<string>;
};

export const Technologies = (props: TechnologiesPropsType) => {
  return (
    <StyledTechnologies>
      {props.technologies.map((item, index) => (
        <Button as="span" key={index} title={item.toUpperCase()} />
      ))}
    </StyledTechnologies>
  );
};

const StyledTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
  margin-bottom: 19px;

  span {
    height: 30px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.12em;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`;
