import React from "react";
import { Button } from "../../../../components/button/Button";
import { NavLinks } from "../../../../components/navLinks/NavLinks";
import { Link } from "react-scroll";

type MenuPropsType = {
  setMenuIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <>
      <NavLinks setMenuIsOpen={props.setMenuIsOpen} />
      <Button
        as={Link}
        to="contacts"
        title="Contact"
        setMenuIsOpen={props.setMenuIsOpen}
      />
    </>
  );
};

export default Menu;
