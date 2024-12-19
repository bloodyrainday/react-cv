import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";

type Props = {};

export const Main = (props: Props) => {
  return (
    <S.Main>
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
        <S.ButtonArrow>
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
