import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box
        
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        color: ${theme.colors.font};
        background-color: ${theme.colors.colorBg};
        

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        button {
            border: none;
            background-color: unset;
            cursor: pointer;
        }
    }
`;
