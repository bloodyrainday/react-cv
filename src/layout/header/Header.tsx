import React from "react";
import styled from "styled-components";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";

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
  gap: 87px;
  background: lightgreen;
`;
