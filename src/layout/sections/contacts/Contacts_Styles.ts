import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";

const Contacts = styled.section`
  margin-bottom: 190px;
  position: relative;
  background-color: ${(props) => props.theme.colors.colorBg};

  @media ${(props) => props.theme.media.mobile} {
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
    background-color: ${(props) => props.theme.colors.colorBg};
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
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 15px 18px 15px 18px;
  margin-bottom: 30px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.theme.colors.colorBg};
  color: ${(props) => props.theme.colors.font};

  &::placeholder {
    color: #919b9b;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export const S = {
  Contacts,
  Form,
  Field,
};
