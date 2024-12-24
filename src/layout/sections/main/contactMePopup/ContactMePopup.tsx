import React, { MutableRefObject } from "react";
import { Contacts } from "../../contacts/Contacts";
import { S } from "../Main_Styles";

type Props = {
  popupRef?: MutableRefObject<HTMLDivElement | null>;
};

const ContactMePopup = (props: Props) => {
  return (
    <S.ContactMePopup>
      <S.Wrapper ref={props.popupRef}>
        <Contacts />
      </S.Wrapper>
    </S.ContactMePopup>
  );
};

export default ContactMePopup;
