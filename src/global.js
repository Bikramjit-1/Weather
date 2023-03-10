import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  p,h2,h1{
    font-family: 'Roboto', sans-serif;
  }
  body {
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background: #ffe9c5;
    color: #d63447;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
     padding-top:80px;;
  }
  `;
