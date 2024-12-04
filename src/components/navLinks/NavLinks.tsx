import React from "react";
import styled from "styled-components";

type Props = {};

export const NavLinks = (props: Props) => {
  return (
    <StyledNavLinks>
      <a href="#">Home</a>

      <a href="#">Projects</a>
    </StyledNavLinks>
  );
};

const StyledNavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
`;
