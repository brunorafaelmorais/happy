import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  a { text-decoration: none; }

  button { cursor: pointer; }

  figure, p, h1, h2, h3, h4, h5, h6 { margin: 0; }
`;
