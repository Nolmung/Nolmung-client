import { styled } from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100dvh - 405px);
    @media (min-height: 800px) {
      height: calc(100dvh - 470px);
    }
    overflow: scroll;
    /* min-height: 100%; */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
