import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    padding: 9px 14px 9px 7px;
    border: 1px solid #a7a7a7;
    background-color: #f0f0f0;
    align-items: center;
    border-radius: 10px;
    gap: 2px;
    cursor: pointer;
  `,
  LocationName: styled.div`
    font-size: 12px;
    font-weight: 600;
    color: #080808;
    line-height: 14px;
    white-space: nowrap;
  `,
};
