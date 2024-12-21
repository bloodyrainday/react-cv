type FontPropsType = {
  weight?: number;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({ weight, lineHeight, Fmin, Fmax }: FontPropsType) => `
    font-weight: ${weight || 400};
    lineHeight: ${lineHeight || "1.2"};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px) ;
`;
