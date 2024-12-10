import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    z-index: 100;
  `,
  IconWrapper: styled.div`
    border-radius: 10px;
    border: 1px solid #17AA1A;
    background: #D3FBD4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    width: 40px;
  `,
  
  ClickIconWrapper: styled.div`
    width: fit-content;
    height: fit-content;
  `,

  Name: styled.span`
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #000;
    text-shadow:
      rgb(255, 255, 255) -1px 0px,
      rgb(255, 255, 255) 0px 1px,
      rgb(255, 255, 255) 1px 0px,
      rgb(255, 255, 255) 0px -1px;
    white-space: nowrap;
  `,
};

export default S;
