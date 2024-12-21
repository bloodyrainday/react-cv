import React from "react";
import { Button } from "../../../../components/button/Button";
import { NavLinks } from "../../../../components/navLinks/NavLinks";
import { Link } from "react-scroll";

const Menu: React.FC = (props) => {
  return (
    <>
      <NavLinks />
      <Button as={Link} to="contacts" title="Contact" />
    </>
  );
};

export default Menu;
