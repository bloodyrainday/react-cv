import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";

type Props = {};

export const About = (props: Props) => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper align="start" direction="column" gap="20px">
          {/* <StyledSpan /> */}
          <SectionTitle>About me</SectionTitle>
          <Text>
            The long barrow was built on land previously inhabited in the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus, estimated to have been 15 metres (50 feet) in length, with
            a chamber built from sarsen megaliths on its eastern end. Both
            inhumed and cremated human remains were placed within this chamber
            during the Neolithic period, representing at least nine or ten
            individuals.
          </Text>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  margin-bottom: 140px;

  @media ${theme.media.mobile} {
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
    background-color: ${theme.colors.primary};
    border-radius: 2px;
    left: -22px;
    top: 5px;
  }
`;

const StyledSpan = styled.span`
  display: block;
  width: 5px;
  height: 116px;
  background-color: ${theme.colors.primary};
  margin-right: 15px;
  border-radius: 2px;
`;
