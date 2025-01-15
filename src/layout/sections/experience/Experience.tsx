import { Container } from "../../../components/Container";
import TimeLine from "./TimeLine";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Experience_Styles";

type Props = {};

const experience = [
  {
    id: 0,
    year: "2022",
    text: "Began my journey into web development by enrolling in the online Rolling Scope School. Acquired foundational skills in HTML, CSS, and basic JavaScript, while completing hands-on projects to solidify my understanding.",
  },
  {
    id: 1,
    year: "2023",
    text: "Continued self-directed learning by leveraging online resources such as YouTube tutorials and coding challenges. Focused on deepening my JavaScript knowledge and honing my problem-solving skills.",
  },
  {
    id: 2,
    year: "2024",
    text: "Expanded my technical skill set by learning advanced technologies like React and TypeScript. Enrolled in the online IT-Incubator course to refine my frontend development expertise through structured learning and practical applications.",
  },
  // {
  //   id: 3,
  //   year: "2025",
  //   text: "Successfully completed the IT-Incubator course, mastering core concepts of frontend development. Enhanced my skill set further by diving into Redux Toolkit and applying it to manage complex application states.",
  // },
];

const Experience: React.FC = (props: Props) => {
  return (
    <S.Experience id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        <TimeLine experience={experience} />
      </Container>
    </S.Experience>
  );
};

export default Experience;
