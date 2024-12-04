import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    width: fit-content;
    height: 40px;
    align-items: center;
    border: 1px solid #17aa1a;
    border-radius: 50px;
    padding: 6px 19px 6px 6px;
    background: #d3fbd4;
    gap: 6px;
  `,
  DogImage: styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  `,
  DogName: styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #17aa1a;
  `,
};
