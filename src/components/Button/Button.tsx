import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  type?: string;
  to?: string;
  callback?: () => void;
  setMenuIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    props.callback && props.callback();
    props.setMenuIsOpen && props.setMenuIsOpen(false);
  };

  return (
    <StyledButton
      as={props.as}
      type={props.type}
      to={props.to}
      smooth={true}
      offset={-100}
      onClick={onClickHandler}
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
