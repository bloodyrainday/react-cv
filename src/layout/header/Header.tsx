import React from "react";
import styled from "styled-components";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { Button } from "../../components/Button/Button";

type Props = {};

export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <NavLinks />
      <Button title="Contact" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 27px 195px 28px 188px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  gap: 87px;
  background: lightgreen;

  button {
    width: 105px;
  }
`;
