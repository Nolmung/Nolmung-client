import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }

  /* 추가 스타일 */
  html, body {
    height: 100%;
    width: 100%;
  }
  button{
    cursor: pointer;
  }
  a{
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
