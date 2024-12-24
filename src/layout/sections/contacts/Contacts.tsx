import React, { ElementRef, MutableRefObject } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

type Props = {
  ref?: MutableRefObject<HTMLDivElement | null>;
};

export const Contacts: React.FC = (props: Props) => {
  const form = React.useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_g8513zf", "template_z7cxud4", form.current, {
        publicKey: "8aJjs1uq_151eb_os",
      })
      .then(
        () => {
          alert("message was successfully sent");
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <S.Contacts id="contacts" ref={props.ref}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>

        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field placeholder="name" required name="user_name" type="text" />

          <S.Field placeholder="subject" required name="subject" type="text" />
          <S.Field
            placeholder="your email"
            required
            name="email"
            type="email"
          />

          <S.Field
            placeholder="message..."
            as="textarea"
            name="message"
            required
          />
          <Button title="Submit" type="submit" />
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
