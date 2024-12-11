import React from "react";
import { Icon } from "./Icon/Icon";
import styled from "styled-components";

type SocialLinkPropsType = {
  title: string;
};

const SocialLink = (props: SocialLinkPropsType) => {
  return (
    <StyledSocialLink>
      <Icon
        iconId="linkedinIcon"
        width="38px"
        height="38px"
        viewBox="0 0 38px 38px"
      />
      <ContactName>{props.title}</ContactName>
    </StyledSocialLink>
  );
};

export default SocialLink;

const StyledSocialLink = styled.a`
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
