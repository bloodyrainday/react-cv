import React from "react";
import Link from "../link/Link";
import { S } from "./NavLinks_Styles";

type NavLinksPropsType = {
  items: Array<string>;
};

export const NavLinks: React.FC<NavLinksPropsType> = (
  props: NavLinksPropsType
) => {
  return (
    <S.NavLinks>
      <S.List>
        {props.items.map((item, index: number) => {
          return (
            <S.Item key={index}>
              <Link title={item} />
            </S.Item>
          );
        })}
      </S.List>
    </S.NavLinks>
  );
};
