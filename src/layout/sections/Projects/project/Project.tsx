import { Technologies } from "./Technologies";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  title: string;
  technologies: Array<string>;
  text: string;
  image: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.Project>
      <S.Image src={props.image} alt="project-image" />

      <S.ProjectInfo>
        <S.Title>{props.title}</S.Title>
        <Technologies technologies={props.technologies} />
        <S.Text>{props.text}</S.Text>
      </S.ProjectInfo>
    </S.Project>
  );
};
