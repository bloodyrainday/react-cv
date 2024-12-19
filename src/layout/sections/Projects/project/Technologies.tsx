import { Button } from "../../../../components/button/Button";
import { S } from "../Projects_Styles";

type TechnologiesPropsType = {
  technologies: Array<string>;
};

export const Technologies: React.FC<TechnologiesPropsType> = (
  props: TechnologiesPropsType
) => {
  return (
    <S.Technologies>
      {props.technologies.map((item, index) => (
        <Button as="span" key={index} title={item.toUpperCase()} />
      ))}
    </S.Technologies>
  );
};
