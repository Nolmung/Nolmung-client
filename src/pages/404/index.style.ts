import { emphasize } from '@mui/material';
import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 50px 50px 50px;
    gap: 80px;
  `,

  Title: styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    display: flex;
    text-align: center;
    justify-content: center;
  `,

  Description: styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 400;
    display: flex;
    text-align: center;
    justify-content: center;
  `,

  Emphasize: styled.span`
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 500;
    display: flex;
    text-align: center;
    justify-content: center;
    color: #17aa1a;
  `,
};
