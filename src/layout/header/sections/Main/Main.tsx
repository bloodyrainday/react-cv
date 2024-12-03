import React from "react";
import { Button } from "../../../../components/Button/Button";
import { Icon } from "../../../../components/Icon/Icon";
import styled from "styled-components";

type Props = {};

export const Main = (props: Props) => {
  return (
    <StyledMain>
      <div>
        <h1>web developer</h1>
        <span>Mikita Bialko</span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </p>
        <Button title="Contact me" />
      </div>

      <Icon
        iconId="mainPicture"
        width="577"
        height="433"
        viewBox="0 0 577 433"
      />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 182px;
  padding-right: 169px;
  min-height: 100vh;
`;
