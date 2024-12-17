import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";
import { font } from "../../../../styles/Common";
import { theme } from "../../../../styles/Theme.styled";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${theme.media.mobile} {
    gap: 15px;
    & > svg {
      width: 88px;
      height: 88px;
    }
  }
`;

const SkillTitle = styled.h3`
  ${font({ weight: 400, Fmax: 16, Fmin: 12 })};
  line-height: 19.5px;
  letter-spacing: 0.1354em;
  text-align: center;
`;
