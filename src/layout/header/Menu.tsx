import React from "react";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { GridWrapper } from "../../components/GridWrapper";
import { Button } from "../../components/Button/Button";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type MenuPropsType = {
  items: Array<string>;
};

const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <GridWrapper gridTemplateColumns="4fr 0fr" align="center" gap="87px">
        <NavLinks items={props.items} />
        <Button as="a" title="Contact" />
      </GridWrapper>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.div`
  @media ${theme.media.tablet} {
    display: none;
  }

  ${GridWrapper} > button {
    width: 105px;
  }
`;
