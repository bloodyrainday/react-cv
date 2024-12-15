import React from "react";
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
        {/* <NavLinks items={props.items} />
        <Button as="a" title="Contact" /> */}
      </FlexWrapper>
    </StyledMobileMenu>
  );
};

export default MobileMenu;

const StyledMobileMenu = styled.div`
  display: none;

  @media ${theme.media.tablet} {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
`;

const BurgerButton = styled.button`
  width: 50px;
  height: 30px;

  span {
    display: block;
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: ${theme.colors.primary};
    border-radius: 10px;

    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(-10px);
      border-radius: 10px;
    }

    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.primary};
      position: absolute;
      transform: translateY(10px);
      border-radius: 10px;
    }
  }
`;
