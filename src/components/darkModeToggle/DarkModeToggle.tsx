import React from "react";
import styled from "styled-components";

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
    <ToggleSwitch>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </ToggleSwitch>
  );
};

export default DarkModeToggle;

const ToggleSwitch = styled.label`
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  bottom: 20px;
  right: 20px;
`;
