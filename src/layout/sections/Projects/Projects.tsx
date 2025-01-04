import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Project } from "./project/Project";
import libraryProject from "../../../assets/images/library.png";
import coffeeProject from "../../../assets/images/coffee.png";
import sneakersProject from "../../../assets/images/sneakers.png";
import todolistProject from "../../../assets/images/todolist.png";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";
import React from "react";
import { GridWrapper } from "../../../components/GridWrapper";

type projectDataPropsType = {
  title: string;
  text: string;
  image: string;
  technologies: string[];
};

const projectData = [
  {
    title: "The Brooklyn Library website",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript"],
    image: `${libraryProject}`,
  },
  {
    title: "Coffee Shop",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "React"],
    image: `${coffeeProject}`,
  },

  {
    title: "Sneaker Store",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "React", "SASS"],
    image: `${sneakersProject}`,
  },
  {
    title: "Todo List",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    technologies: ["Javascript", "React", "SASS", "TypeScript"],
    image: `${todolistProject}`,
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
                  image={item.image}
                  technologies={item.technologies}
                  text={item.text}
                />
              );
            })}
        </GridWrapper>

        {isShownAll || (
          <Button title="See all projects" callback={clickToShowAll} />
        )}
      </Container>
    </S.Projects>
  );
};
