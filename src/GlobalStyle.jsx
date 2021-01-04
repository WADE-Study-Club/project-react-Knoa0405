import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background-image : linear-gradient(#65a9fd,#55bef9,#60dee4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
