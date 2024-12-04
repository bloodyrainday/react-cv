import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/Icon/Icon";
import { NavLinks } from "../../components/navLinks/NavLinks";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <ContactList>
        <ContactItem>
          <ContactLink>
            <Icon
              iconId="gmailIcon"
              width="38px"
              height="38px"
              viewBox="0 0 38px 38px"
            />
            <ContactName>GMAIL</ContactName>
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactLink>
            <Icon
              iconId="linkedinIcon"
              width="38px"
              height="38px"
              viewBox="0 0 38px 38px"
            />
            <ContactName>LINKEDIN</ContactName>
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactLink>
            <Icon
              iconId="githubIcon"
              width="38px"
              height="38px"
              viewBox="0 0 38px 38px"
            />
            <ContactName>GITHUB</ContactName>
          </ContactLink>
        </ContactItem>
      </ContactList>

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

const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 73px;
`;

const ContactItem = styled.li``;

const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const ContactName = styled.span`
  color: #1f2626;
  font-size: 12px;
  font-weight: 400;
  line-height: 11.11px;
  letter-spacing: 0.12em;
  text-align: center;
`;

const NavContactList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 50px;
`;

const NavContactItem = styled.li``;

const NavContactLink = styled.a``;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-top: 49px;
  margin-bottom: 100px;
`;
