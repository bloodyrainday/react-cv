import React from "react";
import { Button } from "../../../components/Button/Button";
import { Icon } from "../../../components/Icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

type Props = {};

export const Main = (props: Props) => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between">
        <UserInfo>
          <h1>web developer</h1>
          <span>Mikita Bialko</span>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </p>
          <Button title="Contact me" />
        </UserInfo>

        <Icon
          iconId="mainPicture"
          width="577"
          height="433"
          viewBox="0 0 577 433"
        />
      </FlexWrapper>
      <Icon
        iconId="arrowScrollIcon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 16px;
  margin-top: 141px;
  padding-left: 182px;
  padding-right: 169px;
  min-height: 100vh;

  svg {
    margin: 0 auto;
  }
`;

const UserInfo = styled.div`
  max-width: 520px;

  button {
    width: 134px;
  }
`;
