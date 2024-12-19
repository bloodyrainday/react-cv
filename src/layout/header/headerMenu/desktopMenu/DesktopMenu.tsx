import React from "react";
import { GridWrapper } from "../../../../components/GridWrapper";
import Menu from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

type DesktopMenuPropsType = {
  items: Array<string>;
};

const DesktopMenu: React.FC<DesktopMenuPropsType> = (
  props: DesktopMenuPropsType
) => {
  return (
    <S.DesktopMenu>
      <GridWrapper gridTemplateColumns="4fr 0fr" align="center" gap="87px">
        <Menu items={props.items} />
      </GridWrapper>
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
