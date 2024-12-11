import React from "react";
import styled from "styled-components";
import SocialLink from "../../components/SocialLink";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme.styled";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Container>
        <List>
          <Item>
            <SocialLink title="GMAIL" />
          </Item>

          <Item>
            <SocialLink title="LINKEDIN" />
          </Item>

          <Item>
            <SocialLink title="GITHUB" />
          </Item>
        </List>

        <NavContactList>
          <NavContactItem>
            <NavContactLink>Projects</NavContactLink>
          </NavContactItem>

          <NavContactItem>
            <NavContactLink>Contact</NavContactLink>
          </NavContactItem>
        </NavContactList>

        <SmallText>WEB DEVELOPER 2024</SmallText>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 73px;
`;

const Item = styled.li``;

const NavContactList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 50px;
`;

const NavContactItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -10px;
    height: 8px;
    width: 100%;
    background-color: ${theme.colors.primary};
    border-radius: 4px;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const NavContactLink = styled.a`
  cursor: pointer;
`;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-top: 49px;
  margin-bottom: 100px;
`;
