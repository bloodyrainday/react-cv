import React from "react";
import styled from "styled-components";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container";
import { GridWrapper } from "../../components/GridWrapper";

type Props = {};

export const Header = (props: Props) => {
  return (
    <StyledHeader>
      <Container>
        <GridWrapper gridTemplateColumns="4fr 1fr" align="center" gap="87px">
          <NavLinks />
          <Button title="Contact" />
        </GridWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 27px 0 28px 0;

  button {
    width: 105px;
  }
`;
