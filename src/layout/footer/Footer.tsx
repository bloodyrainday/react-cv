import SocialLink from "../../components/socialLink/SocialLink";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";
import { NavLinks } from "../../components/navLinks/NavLinks";

type Props = {};

const socialsData = [
  {
    name: "GMAIL",
    iconId: "gmailIcon",
  },
  {
    name: "LINKEDIN",
    iconId: "linkedinIcon",
  },
  {
    name: "GITHUB",
    iconId: "githubIcon",
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
                <SocialLink iconId={item.iconId} />
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
