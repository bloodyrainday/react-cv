import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button/Button";
import { theme } from "../../../styles/Theme.styled";
import { Container } from "../../../components/Container";

type Props = {};

export const Contacts = (props: Props) => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>

        <StyledForm>
          <Field placeholder="name" required />

          <Field placeholder="subject" required />

          <TextArea placeholder="message..." />
          <Button title="Submit" />
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin-bottom: 190px;
`;

const StyledForm = styled.form`
  max-width: 532px;
  margin: 0 auto;
  width: 100%;

  button {
    width: 100%;
  }
`;

const Field = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #534084;
  padding: 15px 18px 16px 18px;
  margin-bottom: 30px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 165px;
  border-radius: 6px;
  border: 2px solid ${theme.colors.primary};
  padding: 15px 18px 16px 18px;
  margin-bottom: 22px;
`;
