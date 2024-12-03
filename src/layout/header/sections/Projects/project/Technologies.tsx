import React from "react";

type TechnologiesPropsType = {
  technologies: Array<string>;
};

export const Technologies = (props: TechnologiesPropsType) => {
  return (
    <div>
      {props.technologies.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
