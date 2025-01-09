import { Button } from "../../../components/button/Button";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import React from "react";
import ContactMePopup from "./contactMePopup/ContactMePopup";

export const Main: React.FC<{ isDarkTheme: boolean }> = (props: {
  isDarkTheme: boolean;
}) => {
  const [isPopupOpen, setIsPopupOpen] = React.useState<boolean>(false);

  const clickOnContactMe = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);
  return (
    <S.Main id="home">
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.UserInfo>
            <S.Title>Frontend Developer</S.Title>
            <S.Name>Mikita Bialko</S.Name>
            <S.Text>
              Driven by creativity and curiosity, I’m always ready to turn
              challenges into opportunities and ideas into reality
            </S.Text>
            {isPopupOpen && <ContactMePopup popupRef={popupRef} />}
            <Button title="Contact me" callback={clickOnContactMe} />
          </S.UserInfo>

          <Icon
            iconId={props.isDarkTheme ? "darkMainPicture" : "mainPicture"}
            width="577"
            height="433"
            viewBox="0 0 577 433"
          />
        </FlexWrapper>
        <S.ButtonArrow to="about" smooth={true} offset={-120}>
          <Icon
            iconId="arrowScrollIcon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </S.ButtonArrow>
      </Container>
    </S.Main>
  );
};
