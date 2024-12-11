import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  title: string;
};

export const Button = (props: ButtonPropsType) => {
  return <StyledButton>{props.title}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 13px;
  font-size: 16px;
  line-height: 19.5px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in;
  }
`;
