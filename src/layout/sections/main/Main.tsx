import React from "react";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { getByDisplayValue } from "@testing-library/react";
import { theme } from "../../../styles/Theme.styled";

type Props = {};

export const Main = (props: Props) => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <UserInfo>
            <Title>Frontend Developer</Title>
            <Name>Mikita Bialko</Name>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Text>
            <Button title="Contact me" />
          </UserInfo>

          <Icon
            iconId="mainPicture"
            width="577"
            height="433"
            viewBox="0 0 577 433"
          />
        </FlexWrapper>
        <ButtonArrow>
          <Icon
            iconId="arrowScrollIcon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </ButtonArrow>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  margin-top: 141px;
  margin-bottom: 220px;
  min-height: 100vh;
`;

const UserInfo = styled.div`
  max-width: 520px;

  button {
    width: 134px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 10px;
`;

const Name = styled.span`
  font-size: 72px;
  font-weight: 600;
  line-height: 87.77px;
  color: ${theme.colors.primary};
  margin-bottom: 11px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  margin-bottom: 29px;
`;

const ButtonArrow = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 16px;
`;
