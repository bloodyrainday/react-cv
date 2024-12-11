import React from "react";
import styled from "styled-components";
import SocialLink from "../../components/SocialLink";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin-top: 190px;
`;

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

const NavContactItem = styled.li``;

const NavContactLink = styled.a`
  cursor: pointer;
`;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-top: 49px;
  margin-bottom: 100px;
`;
