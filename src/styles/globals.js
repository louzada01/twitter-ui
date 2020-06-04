import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Roboto, sans-serif;
      box-shadow: 0;
      border: 0 none;
      outline: 0;
    }
    body {
      background: #d9d9d9;
    }

`;
