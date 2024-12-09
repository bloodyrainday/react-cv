import styled, { createGlobalStyle } from "styled-components";

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
        color: #151717;
        

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }
    }
`;
