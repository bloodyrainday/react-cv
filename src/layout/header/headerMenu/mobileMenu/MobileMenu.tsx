import React from "react";
import Menu from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

type MobileMenuPropsType = {
  items: Array<string>;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const openMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton onClick={openMobileMenu} isOpen={menuIsOpen}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <Menu items={props.items} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

export default MobileMenu;
