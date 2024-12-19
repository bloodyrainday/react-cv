import { Button } from "../../../../components/Button/Button";
import { S } from "../Projects_Styles";

type TechnologiesPropsType = {
  technologies: Array<string>;
};

export const Technologies = (props: TechnologiesPropsType) => {
  return (
    <S.Technologies>
      {props.technologies.map((item, index) => (
        <Button as="span" key={index} title={item.toUpperCase()} />
      ))}
    </S.Technologies>
  );
};
