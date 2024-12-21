import React from "react";
import { Container } from "../../components/Container";
import MobileMenu from "./headerMenu/mobileMenu/MobileMenu";
import DesktopMenu from "./headerMenu/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles";

type Props = {};

export const Header: React.FC = (props: Props) => {
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
        {width > breakpoint ? <DesktopMenu /> : <MobileMenu />}
      </Container>
    </S.Header>
  );
};
