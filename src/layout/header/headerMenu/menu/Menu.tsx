import React from "react";
import { Button } from "../../../../components/Button/Button";
import { NavLinks } from "../../../../components/navLinks/NavLinks";

const Menu: React.FC<{ items: Array<string> }> = (props: {
  items: Array<string>;
}) => {
  return (
    <>
      <NavLinks items={props.items} />
      <Button as="a" title="Contact" />
    </>
  );
};

export default Menu;
