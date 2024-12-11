import styled from "styled-components";

type GridWrapperPropsType = {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  justify?: string;
  align?: string;
  gap?: string;
};

export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns || "1fr"};
  grid-template-rows: ${(props) => props.gridTemplateRows || "1fr"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || "0"};
`;
