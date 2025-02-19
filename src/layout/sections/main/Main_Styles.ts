import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
import { Link } from "react-scroll";

const UserInfo = styled.div`
  max-width: 520px;

  button {
    width: 134px;
  }
`;

const ButtonArrow = styled(Link)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
  animation-name: animatedButtonArrow;

  svg {
    color: ${(props) => props.theme.colors.primary};
  }

  @keyframes animatedButtonArrow {
    from {
      transform: translateX(0);
      transform: translateY(0);
    }

    to {
      transform: translateX(0);
      transform: translateY(10px);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const Main = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0;
  padding-top: 15vh;
  min-height: 100vh;

  @media screen and (max-width: 1050px) {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      justify-content: center;
    }

    ${FlexWrapper} > svg {
      margin-bottom: 70px;
      width: 420px;
      height: 330px;
    }

    ${UserInfo} {
      text-align: center;
    }

    ${ButtonArrow} {
      display: none;
    }
  }

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 100px;

    ${FlexWrapper} > svg {
      width: 320px;
      height: 230px;
      margin-bottom: 15px;
    }
  }
`;

const Title = styled.h1`
  ${font({ weight: 400, Fmax: 20, Fmin: 16 })}
  line-height: 23px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 12px;
  }
`;

const Name = styled.span`
  ${font({ weight: 600, Fmax: 72, Fmin: 40 })}
  margin-bottom: 11px;
  white-space: nowrap;

  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  margin-bottom: 30px;

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 16px;
  }
`;

const ContactMePopup = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;

  h2 {
    display: none;
  }

  form {
    background-color: ${(props) => props.theme.colors.colorBg};
    border: 2px solid ${(props) => props.theme.colors.primary};
    padding: 20px 50px;
    border-radius: 20px;
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%); */
    resize: none;

    button {
      display: block;
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  section {
    margin: 0;

    div {
      padding: 0;
    }
  }
`;

export const S = {
  UserInfo,
  ButtonArrow,
  Main,
  Title,
  Name,
  Text,
  ContactMePopup,
  Wrapper,
};
