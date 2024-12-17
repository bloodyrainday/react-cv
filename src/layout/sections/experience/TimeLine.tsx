import React from "react";
import styled from "styled-components";
import CheckPoint from "./CheckPoint";

type experienceType = {
  id: number;
  year: string;
  text: string;
};

type TimeLinePropsType = {
  experience: Array<experienceType>;
};

const TimeLine = (props: TimeLinePropsType) => {
  return (
    <StyledTimeLine>
      {props.experience.map((item) => {
        return <CheckPoint key={item.id} year={item.year} text={item.text} />;
      })}
    </StyledTimeLine>
  );
};

export default TimeLine;

const StyledTimeLine = styled.div`
  margin: 5em auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 880px) {
    width: 80vw;
  }
`;
