import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Button } from "../../../../components/Button/Button";

type Props = {};

export const Contacts = (props: Props) => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>

      <StyledForm>
        <Field placeholder="name" />
        <Field placeholder="subject" />
        <Field as={"textarea"} placeholder="message" />
        <Button title="Submit" />
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: lightpink;
  padding-top: 140px;
  ${SectionTitle} {
    padding-left: 189px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 532px;
  margin: 0 auto;
  width: 100%;
  gap: 48px;
`;

const Field = styled.input``;
