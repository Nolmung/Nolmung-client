import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    -ms-overflow-style: none; /* Internet Explorer에서 스크롤바 숨기기 */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge에서 스크롤바 숨기기 */
    }
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/PretendardVariable.woff2');
    font-weight: 100 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'GoryeongStrawberry';
    src: url('/assets/fonts/GoryeongStrawberry.woff2');
    font-weight: 100 900;
    font-style: normal;
  }

  html, body {
    font-family: 'Pretendard', sans-serif;
    color: black;
    
    height: 100%;
    width: 100%;
    background: #FDFDFD;
    overflow: hidden;
    /* background-color: #d3fbd4; */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
    border: none;
  }

  button:active{
    transform: scale(0.97);
  }

  a{
    cursor: pointer;
    text-decoration: none;
  }
  input{
    all: unset;
  }
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
