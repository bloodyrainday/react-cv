import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const Footer = styled.footer`
  & nav ul {
    justify-content: center;
    gap: 48px;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 73px;
  margin-bottom: 50px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const SmallText = styled.small`
  display: block;
  text-align: center;
  margin-top: 49px;
  font-size: 10px;
  margin-bottom: 15px;
`;

const SocialName = styled.span`
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  line-height: 11.11px;
  letter-spacing: 0.12em;
  text-align: center;
`;

export const S = {
  Footer,
  List,
  Item,
  SmallText,
  SocialName,
};
