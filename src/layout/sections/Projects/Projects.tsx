import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Project } from "./project/Project";
import projectImage from "../../../assets/images/picture_2.png";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";
import { GridWrapper } from "../../../components/GridWrapper";

type projectDataPropsType = {
  title: string;
  text: string;
  technologies: string[];
};

const projectData = [
  {
    title: "TITLE PROJECT",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "PostgreSQL", "React", "Redux"],
  },
  {
    title: "I N S I G H T G R A M",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "React Native", "Redux"],
  },

  {
    title: "TITLE PROJECT",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "PostgreSQL", "React", "Redux"],
  },
  {
    title: "I N S I G H T G R A M",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "React Native", "Redux"],
  },
];

export const Projects: React.FC = (props) => {
  const [data, setData] = React.useState<Array<projectDataPropsType>>();
  const [isShownAll, setIsShownAll] = React.useState<boolean>(false);

  const clickToShowAll = () => {
    setIsShownAll(true);
  };

  React.useEffect(() => {
    setData(projectData.slice(0, 2));

    if (isShownAll) {
      setData(projectData);
    }
  }, [isShownAll]);
  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>

        <GridWrapper
          justify="space-between"
          gap="27px"
          gridTemplateColumns="1fr 1fr"
        >
          {data &&
            data.map((item, index) => {
              return (
                <Project
                  key={index}
                  title={item.title}
                  src={projectImage}
                  technologies={item.technologies}
                  text={item.text}
                />
              );
            })}
        </GridWrapper>

        {isShownAll || (
          <Button title="See all projects" clickToShowAll={clickToShowAll} />
        )}
      </Container>
    </S.Projects>
  );
};
