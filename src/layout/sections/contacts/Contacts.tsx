import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";

type Props = {};

export const Contacts: React.FC = (props: Props) => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>

        <S.Form>
          <S.Field placeholder="name" required />

          <S.Field placeholder="subject" required />

          <S.Field placeholder="message..." as="textarea" />
          <Button title="Submit" type="submit" />
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
