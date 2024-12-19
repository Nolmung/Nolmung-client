import styled from 'styled-components';

export const S = {
  NoResultWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    padding: 100px;
    width: 100%;
    height: calc(100dvh - 305px);
  `,
  NoResultSubText: styled.p`
    color: #5e5e5e;
    font-size: 16px;
  `,
  NoResultDescription: styled.p`
    font-size: 14px;
    color: #a6b1be;
  `,
  placeInsertBtn: styled.button`
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    margin-top: 10px;
    padding: 12px 20px;
    opacity: 0.8;
    cursor: pointer;
    color: #5e5e5e;
  `,
};
