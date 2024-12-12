import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";

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
`;

const SkillTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0.1354em;
  text-align: center;
`;