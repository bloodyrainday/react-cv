import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  type?: string;
  to?: string;
  clickToShowAll?: () => void;
  clickOnContactMe?: () => void;
};

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  return (
    <StyledButton
      as={props.as}
      type={props.type}
      to={props.to}
      smooth={true}
      offset={-100}
      onClick={props.clickToShowAll || props.clickOnContactMe}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonPropsType>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 16px;
  line-height: 19.5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in;
  }
`;
