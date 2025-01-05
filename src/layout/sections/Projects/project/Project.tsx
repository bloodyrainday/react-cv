import { Technologies } from "./Technologies";
import { S } from "../Projects_Styles";
import { projectDataPropsType } from "../Projects";

type ProjectPropsType = {
  projectData: projectDataPropsType;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.Project href={props.projectData.link} target="_blank">
      <S.Image src={props.projectData.image} alt="project-image" />

      <S.ProjectInfo>
        <S.Title>{props.projectData.title}</S.Title>
        <Technologies technologies={props.projectData.technologies} />
        <S.Text>{props.projectData.text}</S.Text>
      </S.ProjectInfo>
    </S.Project>
  );
};
