import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type LinkPropsType = {
  title: string;
};

const Link: React.FC<LinkPropsType> = (props: LinkPropsType) => {
  return <StyledLink href="#">{props.title}</StyledLink>;
};

export default Link;

const StyledLink = styled.a`
  color: ${theme.colors.font};

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -10px;
    height: 8px;
    width: 100%;
    background-color: ${theme.colors.primary};
    border-radius: 4px;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
      transition: transform 0.3s ease-in-out;
    }
  }
`;
