import { S } from "./Experience_Styles";

type CheckPointPropsType = {
  year: string;
  text: string;
};

const CheckPoint: React.FC<CheckPointPropsType> = (
  props: CheckPointPropsType
) => {
  return (
    <S.CheckPoint>
      <S.Frame>
        <S.Title>{props.year}</S.Title>
        <S.Description>{props.text}</S.Description>
      </S.Frame>
    </S.CheckPoint>
  );
};

export default CheckPoint;
