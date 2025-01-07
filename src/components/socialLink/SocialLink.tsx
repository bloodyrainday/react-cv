import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

type SocialLinkPropsType = {
  iconId: string;
  link: string;
};

const SocialLink: React.FC<SocialLinkPropsType> = (
  props: SocialLinkPropsType
) => {
  return (
    <StyledSocialLink href={props.link} target="_blank">
      <Icon
        iconId={props.iconId}
        width="38px"
        height="38px"
        viewBox="0 0 38px 38px"
      />
    </StyledSocialLink>
  );
};

export default SocialLink;

const StyledSocialLink = styled.a`
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: inline-block;
  width: 38px;
  height: 38px;

  svg {
    color: ${(props) => props.theme.colors.icon};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.icon};
    transition: background-color 0.3s ease-in;
    outline: 2px solid ${(props) => props.theme.colors.primary};

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
