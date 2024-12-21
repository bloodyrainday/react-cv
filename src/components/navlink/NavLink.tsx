import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
import { animateScroll, Link } from "react-scroll";

type LinkPropsType = {
  name: string;
  href: string;
};

const moveToTheTop = (href: string) => {
  if (href === "home") {
    return animateScroll.scrollToTop;
  }
};

const NavLink: React.FC<LinkPropsType> = (props: LinkPropsType) => {
  return (
    <StyledLink
      onClick={moveToTheTop(props.href)}
      to={props.href}
      smooth={true}
      activeClass="active"
      spy={true}
      offset={-90}
    >
      {props.name}
    </StyledLink>
  );
};

export default NavLink;

const StyledLink = styled(Link)`
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

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
      transition: transform 0.3s ease-in-out;
    }
  }
`;
