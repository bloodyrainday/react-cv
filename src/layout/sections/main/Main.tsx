import React from "react";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

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

const UserInfo = styled.div`
  max-width: 520px;

  button {
    width: 134px;
  }
`;

const StyledMain = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0;
  padding-top: 15vh;
  height: 100vh;

  @media screen and (max-width: 1050px) {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      justify-content: center;
    }

    ${FlexWrapper} > svg {
      margin-bottom: 70px;
    }

    ${UserInfo} {
      text-align: center;
    }
  }
`;

const Title = styled.h1`
  ${font({ weight: 400, Fmax: 20, Fmin: 16 })}
  line-height: 23px;
  margin-bottom: 10px;

  @media ${theme.media.mobile} {
    margin-bottom: 12px;
  }
`;

const Name = styled.span`
  ${font({ weight: 600, color: `${theme.colors.primary}`, Fmax: 72, Fmin: 40 })}
  margin-bottom: 11px;
  white-space: nowrap;

  @media ${theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const ButtonArrow = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;

  animation-name: animatedButtonArrow;

  @keyframes animatedButtonArrow {
    from {
      transform: translateX(0);
      transform: translateY(0);
    }

    to {
      transform: translateX(0);
      transform: translateY(10px);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;
