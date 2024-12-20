import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme.styled";

const Contacts = styled.section`
  margin-bottom: 190px;

  @media ${theme.media.mobile} {
    margin-bottom: 150px;
  }

  ${SectionTitle} {
    margin-bottom: 28px;
  }

  textarea {
    width: 100%;
    height: 165px;
    margin-bottom: 22px;
    resize: none;
  }
`;

const Form = styled.form`
  max-width: 532px;
  margin: 0 auto;
  width: 100%;

  button {
    width: 100%;
  }
`;

const Field = styled.input`
  position: relative;
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

export const S = {
  Contacts,
  Form,
  Field,
};
