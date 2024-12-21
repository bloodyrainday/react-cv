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
  background-color: ${(props) => props.theme.colors.colorBg};
  color: ${(props) => props.theme.colors.font};
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
    ${FlexWrapper} > svg {
      width: 320px;
      height: 230px;
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

export const S = {
  UserInfo,
  ButtonArrow,
  Main,
  Title,
  Name,
  Text,
};
