import { styled } from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100dvh - 295px);
    overflow: scroll;
    min-height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
