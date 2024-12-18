import { theme } from "./Theme.styled";

type FontPropsType = {
  weight?: number;
  color?: string;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    lineHeight: ${lineHeight || "1.2"};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px) ;
`;
