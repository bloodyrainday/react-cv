import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Project } from "./project/Project";
import projectImage from "../../../assets/images/picture_2.png";
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";

type Props = {};

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
];

export const Projects: React.FC = (props: Props) => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>

        <FlexWrapper justify="space-between" gap="27px">
          {projectData.map((item, index) => {
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
        </FlexWrapper>

        <Button title="See all projects" />
      </Container>
    </S.Projects>
  );
};
