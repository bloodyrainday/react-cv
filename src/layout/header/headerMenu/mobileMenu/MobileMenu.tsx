import React from "react";
import Menu from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";
import DarkModeToggle from "../../../../components/darkModeToggle/DarkModeToggle";

type MobileMenuPropsType = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};

const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const openMobileMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  React.useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuIsOpen]);

  return (
    <S.MobileMenu>
      <S.BurgerButton onClick={openMobileMenu} isOpen={menuIsOpen}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <Menu setMenuIsOpen={setMenuIsOpen} />
        <DarkModeToggle toggleTheme={props.toggleTheme} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

export default MobileMenu;
