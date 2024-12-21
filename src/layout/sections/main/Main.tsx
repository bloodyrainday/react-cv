import { Button } from "../../../components/button/Button";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

type Props = {};

export const Main: React.FC = (props: Props) => {
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.UserInfo>
            <S.Title>Frontend Developer</S.Title>
            <S.Name>Mikita Bialko</S.Name>
            <S.Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </S.Text>
            <Button title="Contact me" />
          </S.UserInfo>

          <Icon
            iconId="mainPicture"
            width="577"
            height="433"
            viewBox="0 0 577 433"
          />
        </FlexWrapper>
        <S.ButtonArrow to="about" smooth={true} offset={-120}>
          <Icon
            iconId="arrowScrollIcon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </S.ButtonArrow>
      </Container>
    </S.Main>
  );
};
