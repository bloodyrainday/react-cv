import React from "react";
import { Container } from "../../components/Container";
import MobileMenu from "./headerMenu/mobileMenu/MobileMenu";
import DesktopMenu from "./headerMenu/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles";

type HeaderPropsType = {
  toggleTheme: () => void;
};

export const Header: React.FC<HeaderPropsType> = (props: HeaderPropsType) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.Header>
      <Container>
        {width > breakpoint ? (
          <DesktopMenu />
        ) : (
          <MobileMenu toggleTheme={props.toggleTheme} />
        )}
      </Container>
    </S.Header>
  );
};
