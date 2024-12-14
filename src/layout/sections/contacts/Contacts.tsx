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

          <Field placeholder="message..." as="textarea" />
          <Button title="Submit" type="submit" />
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin-bottom: 190px;

  textarea {
    width: 100%;
    height: 165px;
    margin-bottom: 22px;
    resize: none;
  }
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
  border-radius: 6px;
  border: 1px solid #534084;
  padding: 15px 18px 15px 18px;
  margin-bottom: 30px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #919b9b;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
  }
`;
