import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

const About = styled.section`
  margin-bottom: 140px;

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 100px;
  }

  h2 {
  }

  ${FlexWrapper} {
    padding-left: 22px;
  }
`;

const Text = styled.p`
  position: relative;
  max-width: 865px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.04em;

  &::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 116px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    left: -22px;
    top: 5px;
  }
`;

export const S = {
  About,
  Text,
};
