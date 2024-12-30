import React from "react";
import NavLink from "../navlink/NavLink";
import { S } from "./NavLinks_Styles";

type NavLinksPropsType = {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export const NavLinks: React.FC<NavLinksPropsType> = (
  props: NavLinksPropsType
) => {
  const navItems = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "Projects",
      href: "projects",
    },
  ];

  return (
    <S.NavLinks>
      <S.List>
        {navItems.map((item, index: number) => {
          return (
            <S.Item key={index}>
              <NavLink
                name={item.name}
                href={item.href}
                setMenuIsOpen={props.setMenuIsOpen}
              />
            </S.Item>
          );
        })}
      </S.List>
    </S.NavLinks>
  );
};
