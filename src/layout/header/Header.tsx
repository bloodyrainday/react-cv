import React from "react";
import styled from "styled-components";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container";
import { GridWrapper } from "../../components/GridWrapper";

type Props = {};

const navItems = ["Home", "Projects"];

export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <GridWrapper gridTemplateColumns="4fr 0fr" align="center" gap="87px">
          <NavLinks items={navItems} />
          <Button title="Contact" />
        </GridWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 27px 0 28px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  button {
    width: 105px;
  }
`;
