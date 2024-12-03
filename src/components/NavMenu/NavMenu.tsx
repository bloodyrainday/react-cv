import React from "react";
import styled from "styled-components";

type Props = {};

export const NavLinks = (props: Props) => {
  return (
    <StyledNavMenu>
      <a href="#">Home</a>

      <a href="#">Projects</a>
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
`;
