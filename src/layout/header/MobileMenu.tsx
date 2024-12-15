import React from "react";
import { GridWrapper } from "../../components/GridWrapper";
import { Button } from "../../components/Button/Button";
import { NavLinks } from "../../components/navLinks/NavLinks";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type MobileMenuPropsType = {
  items: Array<string>;
};

const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton>
        <span></span>
      </BurgerButton>

      <FlexWrapper gap="87px">
        <NavLinks items={props.items} />
        <Button as="a" title="Contact" />
      </FlexWrapper>
    </StyledMobileMenu>
  );
};

export default MobileMenu;

const StyledMobileMenu = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.div``;
