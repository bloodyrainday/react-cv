import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <Icon iconId={props.iconId} />
      <S.Title>{props.title}</S.Title>
    </S.Skill>
  );
};
