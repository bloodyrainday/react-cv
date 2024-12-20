import styled from "styled-components";
import { GridWrapper } from "../../../components/GridWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

const Skills = styled.section`
  margin-bottom: 140px;

  @media ${theme.media.mobile} {
    margin-bottom: 100px;
  }

  ${SectionTitle} {
    margin-bottom: 30px;
  }

  ${GridWrapper} {
  }

  @media ${theme.media.mobile} {
    ${GridWrapper} {
      gap: 48px;
    }
  }
`;

const Skill = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${theme.media.mobile} {
    gap: 15px;
    & > svg {
      width: 88px;
      height: 88px;
    }
  }
`;

const Title = styled.h3`
  ${font({ weight: 400, Fmax: 16, Fmin: 12 })};
  line-height: 19.5px;
  letter-spacing: 0.1354em;
  text-align: center;
`;

export const S = {
  Skills,
  Skill,
  Title,
};
