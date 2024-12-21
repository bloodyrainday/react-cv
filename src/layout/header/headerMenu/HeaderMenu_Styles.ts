import styled, { css } from "styled-components";
import { GridWrapper } from "../../../components/GridWrapper";

// Desktop Menu

const DesktopMenu = styled.div`
  ${GridWrapper} > button {
    width: 105px;
  }
`;

// Mobile Menu

const MobileMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
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
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;

    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background-color: ${(props) => props.theme.colors.primary};
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
      background-color: ${(props) => props.theme.colors.primary};
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
  background-color: ${(props) => props.theme.colors.colorBg};
  transform: translateX(-100%);
  transition: 0.2s ease-in-out;

  ul {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const S = {
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
