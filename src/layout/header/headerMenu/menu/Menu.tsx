import React from "react";
import { Button } from "../../../../components/button/Button";
import { NavLinks } from "../../../../components/navLinks/NavLinks";
import { Link } from "react-scroll";

type MenuPropsType = {};

const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <>
      <NavLinks />
      <Button as={Link} to="contacts" title="Contact" />
    </>
  );
};

export default Menu;
