import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

type SocialLinkPropsType = {
  iconId: string;
};

const SocialLink: React.FC<SocialLinkPropsType> = (
  props: SocialLinkPropsType
) => {
  return (
    <StyledSocialLink>
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
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  display: inline-block;
  width: 38px;
  height: 38px;

  svg {
    color: ${theme.colors.icon};
  }

  &:hover {
    background-color: ${theme.colors.icon};
    transition: background-color 0.3s ease-in;
    outline: 2px solid ${theme.colors.primary};

    svg {
      color: ${theme.colors.primary};
    }
  }
`;
