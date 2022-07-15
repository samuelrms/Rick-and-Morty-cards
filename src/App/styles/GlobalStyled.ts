import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.lightgreen};
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
`;
