import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";

const SunIcon = styled(FaSun)`
  width: 35px;
  height: 50px;
  color: ${(props) => props.theme.colors.primary};
`;

const MoonIcon = styled(FaMoon)`
  width: 30px;
  height: 50px;
  color: ${(props) => props.theme.colors.primary};
`;

const ToggleSwitch = styled.label`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 160px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  z-index: 999999999999999999;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  width: 60px;
  height: 34px;
  left: 50px;
  right: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
  background-color: gray;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Checkbox = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: green;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

export const S = {
  SunIcon,
  MoonIcon,
  ToggleSwitch,
  Slider,
  Checkbox,
};
