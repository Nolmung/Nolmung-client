import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 90px;
    min-width: 320px;
    position: sticky;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 1004;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  IconArea: styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
    color: #5e5e5e;
    margin-bottom: 20px;
  `,
  IconDescription: styled.div`
    font-size: 12px;
    text-align: center;
  `,
};
