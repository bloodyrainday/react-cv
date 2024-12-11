import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type Props = {};

export const NavLinks = (props: Props) => {
  return (
    <StyledNavLinks>
      <NavList>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <NavLink href="#">Projects</NavLink>
        </NavItem>
      </NavList>
    </StyledNavLinks>
  );
};

const StyledNavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${theme.colors.font};
`;
