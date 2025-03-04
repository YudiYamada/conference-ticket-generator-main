import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => theme.fontImports};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
