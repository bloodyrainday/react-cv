import React from "react";
import { Button } from "../../components/Button/Button";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.styled";

type MobileMenuPropsType = {
  items: Array<string>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton
        onClick={() => props.setIsOpen(!props.isOpen)}
        isOpen={props.isOpen}
      >
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={props.isOpen}>
        <NavLinks items={props.items} />
        <Button as="a" title="Contact" />
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

export default MobileMenu;

const StyledMobileMenu = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 50px;
  height: 30px;
  z-index: 9999;
  span {
    display: block;
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: ${theme.colors.primary};
    border-radius: 10px;

    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(-10px);
      border-radius: 10px;
      transition: transform 0.1s ease-in-out;
    }

    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(10px);
      border-radius: 10px;
      transition: transform 0.1s ease-in-out;
    }

    ${(props) =>
      props.isOpen &&
      css`
        & {
          background-color: transparent;
        }

        &::before {
          transform: rotate(-45deg) translateY(0);
        }

        &::after {
          transform: rotate(45deg) translateY(0);
        }
      `}
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      flex-direction: column;
      gap: 80px;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 999;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 1);

      ul {
        flex-direction: column;
        align-items: center;
        gap: 80px;
      }
    `}
`;
