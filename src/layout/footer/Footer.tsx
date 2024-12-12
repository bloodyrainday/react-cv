import React from "react";
import styled from "styled-components";
import SocialLink from "../../components/SocialLink";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme.styled";
import Link from "../../components/Link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Container>
        <List>
          <Item>
            <SocialLink iconId="gmailIcon" />
            <SocialName>GMAIL</SocialName>
          </Item>

          <Item>
            <SocialLink iconId="linkedinIcon" />
            <SocialName>LINKEDIN</SocialName>
          </Item>

          <Item>
            <SocialLink iconId="githubIcon" />
            <SocialName>GITHUB</SocialName>
          </Item>
        </List>

        <NavContactList>
          <NavContactItem>
            <Link title="Projects" />
          </NavContactItem>

          <NavContactItem>
            <Link title="Contacts" />
          </NavContactItem>
        </NavContactList>

        <SmallText>FRONTEND DEVELOPER 2024</SmallText>
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

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

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

const NavContactLink = styled.a``;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-top: 49px;
  margin-bottom: 100px;
`;

const SocialName = styled.span`
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  line-height: 11.11px;
  letter-spacing: 0.12em;
  text-align: center;
`;
