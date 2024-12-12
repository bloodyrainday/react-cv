import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
import Link from "../Link";

type NavLinksPropsType = {
  items: Array<string>;
};

export const NavLinks = (props: NavLinksPropsType) => {
  return (
    <StyledNavLinks>
      <NavList>
        {props.items.map((item, index: number) => {
          return (
            <NavItem key={index}>
              <Link title={item} />
            </NavItem>
          );
        })}
      </NavList>
    </StyledNavLinks>
  );
};

const StyledNavLinks = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  position: relative;
`;

// const NavLink = styled.a`
//   color: ${theme.colors.font};

//   &::before {
//     content: "";
//     display: inline-block;
//     position: absolute;
//     bottom: -10px;
//     height: 8px;
//     width: 100%;
//     background-color: ${theme.colors.primary};
//     border-radius: 4px;
//     transform: scale(0);
//   }

//   &:hover {
//     &::before {
//       transform: scale(1);
//       transition: transform 0.3s ease-in-out;
//     }
//   }
// `;
