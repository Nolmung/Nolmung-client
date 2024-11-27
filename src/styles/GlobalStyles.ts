import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/PretendardVariable.woff2');
    font-weight: 100 900;
    font-style: normal;
  }

  html, body {
    font-family: 'Pretendard', sans-serif;
    height: 100%;
    width: 100%;
    background: #E8F8E8;
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
