import React from "react";
import styled from "styled-components";
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
  const [isOnTop, setIsOnTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 200) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    });
  }, []);

  return (
    <StyledLink
      onClick={moveToTheTop(props.href)}
      to={props.href}
      smooth={true}
      activeClass="active"
      spy={true}
      offset={0}
    >
      {props.name}
    </StyledLink>
  );
};

export default NavLink;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.font};

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -10px;
    height: 8px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
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
