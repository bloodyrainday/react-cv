import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { GridWrapper } from "../../../components/GridWrapper";
import { S } from "./Skills_Styles";

type Props = {};

const skillData = [
  {
    title: "JAVASCRIPT",
    iconId: "jsIcon",
  },
  {
    title: "TYPESCRIPT",
    iconId: "tsIcon",
  },
  {
    title: "REACT",
    iconId: "reactIcon",
  },
  {
    title: "REDUX",
    iconId: "reduxIcon",
  },
  {
    title: "STYLED COMPONENTS",
    iconId: "scIcon",
  },
  {
    title: "GIT",
    iconId: "gitIcon",
  },
];

export const Skills: React.FC = (props: Props) => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <GridWrapper
          gap="60px"
          gridTemplateColumns="1fr 1fr 1fr"
          justify="center"
        >
          {skillData.map((item, index) => {
            return (
              <Skill
                key={index}
                title={item.title}
                iconId={item.iconId}
              ></Skill>
            );
          })}
        </GridWrapper>
      </Container>
    </S.Skills>
  );
};
