import React from "react";
import Menu from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

type MobileMenuPropsType = {
  items: Array<string>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton
        onClick={() => props.setIsOpen(!props.isOpen)}
        isOpen={props.isOpen}
      >
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={props.isOpen}>
        <Menu items={props.items} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

export default MobileMenu;
