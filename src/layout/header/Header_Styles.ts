import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const Header = styled.header`
  padding: 27px 0 28px 0;
  background-color: ${theme.colors.colorBg};
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const S = {
  Header,
};
