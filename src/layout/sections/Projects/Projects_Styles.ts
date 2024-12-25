import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { GridWrapper } from "../../../components/GridWrapper";

const Projects = styled.section`
  margin-bottom: 140px;

  @media ${(props) => props.theme.media.tablet} {
    ${GridWrapper} {
      grid-template-columns: 1fr;
      justify-content: space-between;
    }
  }

  @media ${(props) => props.theme.media.mobile} {
    margin-bottom: 100px;
  }

  ${SectionTitle} {
    margin-bottom: 30px;
  }

  ${GridWrapper} {
    margin-bottom: 35px;

    & button {
      opacity: 1;
    }
  }

  ${GridWrapper} ~ button {
    display: block;
    width: 305px;
    height: 56px;
    margin: 0 auto;
  }
`;

const Project = styled.article`
  position: relative;
  width: 522px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.projectBg};
  border-radius: 6px;
  box-shadow: 2px 2px 32px 0px #28262c26;
`;

const ProjectInfo = styled.div`
  padding: 29px 26px 31px 26px;

  @media ${(props) => props.theme.media.mobile} {
    padding: 16px 17px 20px 17px;
  }
`;

const Image = styled.img`
  border-radius: 6px;
  width: 100%;
`;

const Title = styled.h3`
  margin-bottom: 11px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
  margin-bottom: 19px;

  span {
    height: 30px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.12em;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`;

export const S = {
  Projects,
  Project,
  ProjectInfo,
  Image,
  Title,
  Text,
  Technologies,
};
