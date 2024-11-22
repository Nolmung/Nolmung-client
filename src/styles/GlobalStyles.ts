import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 추가 스타일 */
  html, body {
    height: 100%;
    width: 100%;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
