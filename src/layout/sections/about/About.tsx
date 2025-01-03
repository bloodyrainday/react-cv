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
            The long barrow was built on land previously inhabited in the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus, estimated to have been 15 metres (50 feet) in length, with
            a chamber built from sarsen megaliths on its eastern end. Both
            inhumed and cremated human remains were placed within this chamber
            during the Neolithic period, representing at least nine or ten
            individuals.
          </S.Text>
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
