import React from "react";
import CheckPoint from "./CheckPoint";
import { S } from "./Experience_Styles";

type experienceType = {
  id: number;
  year: string;
  text: string;
};

type TimeLinePropsType = {
  experience: Array<experienceType>;
};

const TimeLine: React.FC<TimeLinePropsType> = (props: TimeLinePropsType) => {
  return (
    <S.TimeLine>
      {props.experience.map((item) => {
        return <CheckPoint key={item.id} year={item.year} text={item.text} />;
      })}
    </S.TimeLine>
  );
};

export default TimeLine;
