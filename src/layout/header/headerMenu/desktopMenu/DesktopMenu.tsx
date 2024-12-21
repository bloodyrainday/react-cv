import React from "react";
import { GridWrapper } from "../../../../components/GridWrapper";
import Menu from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

const DesktopMenu: React.FC = (props) => {
  return (
    <S.DesktopMenu>
      <GridWrapper gridTemplateColumns="4fr 0fr" align="center" gap="87px">
        <Menu />
      </GridWrapper>
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
