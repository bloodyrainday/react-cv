import React from "react";
import styled from "styled-components";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container";
import { GridWrapper } from "../../components/GridWrapper";
import { theme } from "../../styles/Theme.styled";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

type Props = {};

const navItems = ["Home", "Projects"];

export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <Menu items={navItems} />
        <MobileMenu items={navItems} />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 27px 0 28px 0;
  background-color: ${theme.colors.colorBg};
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;
