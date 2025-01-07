import SocialLink from "../../components/socialLink/SocialLink";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

type Props = {};

const socialsData = [
  {
    name: "LINKEDIN",
    iconId: "linkedinIcon",
    link: "https://www.linkedin.com/in/mikita-bia%C5%82ko-14a448260/",
  },
  {
    name: "GITHUB",
    iconId: "githubIcon",
    link: "https://github.com/bloodyrainday",
  },
];

export const Footer: React.FC = (props: Props) => {
  return (
    <S.Footer>
      <Container>
        <S.List>
          {socialsData.map((item, index) => {
            return (
              <S.Item key={index}>
                <SocialLink iconId={item.iconId} link={item.link} />
                <S.SocialName>{item.name}</S.SocialName>
              </S.Item>
            );
          })}
        </S.List>

        <S.SmallText>FRONTEND DEVELOPER 2024</S.SmallText>
      </Container>
    </S.Footer>
  );
};
