import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./About_Styles";

type Props = {};

export const About: React.FC = (props: Props) => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper align="start" direction="column" gap="20px">
          <SectionTitle>About me</SectionTitle>
          <S.Text>
            I graduated with a degree in Mechanical Engineering in 2022 and
            gained two years of professional experience as a mechanical engineer
            in a transport company. <br />
            <br />
            However, during my university years, I realized that engineering
            wasn’t my true passion. Encouraged to explore programming, I
            enrolled in the Rolling Scope School frontend online course while
            working full-time. Through this course, I built my first projects
            using JavaScript, HTML, and CSS, which ignited my enthusiasm for web
            development. <br />
            <br />
            Driven by curiosity and determination, I continued self-learning and
            I'm currently attending an advanced online course from IT-Incubator,
            focusing on React and Redux-Toolkit. I am passionate about creating
            dynamic and user-friendly web applications, and I’m excited to
            transition into a career in frontend development where I can apply
            my technical problem-solving skills and dedication to continuous
            improvement.
          </S.Text>
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
