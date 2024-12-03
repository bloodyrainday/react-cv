import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon/Icon";

type SkillPropsType = {
  iconId: string;
  skillTitle: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.skillTitle}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div``;

const SkillTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.1354em;
  text-align: center;
  color: #1f2626;
`;
