import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

type Props = {};

export const About = (props: Props) => {
  return (
    <StyledAbout>
      <SectionTitle>About me</SectionTitle>
      <FlexWrapper align="center">
        <StyledSpan />
        <Text>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </Text>
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 219px 0 140px 189px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.p`
  max-width: 865px;
  color: #1f2626;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.04em;
  text-align: left;
`;

const StyledSpan = styled.span`
  display: block;
  width: 5px;
  height: 116px;
  background-color: #5222d0;
  margin-right: 17px;
  border-radius: 2px;
`;
