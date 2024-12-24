import React from "react";
import { S } from "./DarkModeToggle_Styles";

type DarkModeTogglePropsType = {
  toggleTheme: () => void;
};

const DarkModeToggle = (props: DarkModeTogglePropsType) => {
  const [isToggled, setIsToggled] = React.useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    props.toggleTheme();
  };

  return (
    <S.ToggleSwitch>
      <S.SunIcon />
      <S.Checkbox type="checkbox" checked={isToggled} onChange={onToggle} />
      <S.Slider />
      <S.MoonIcon />
    </S.ToggleSwitch>
  );
};

export default DarkModeToggle;
