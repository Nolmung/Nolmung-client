import styled from 'styled-components';

const St = {
  Wrapper: styled.div.attrs(() => ({
    className: 'scroll-menu',
  }))`
    width: 346px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    background: #fdfdfd;
    padding: 13px 20px 20px 20px;
    display: flex;
    flex-direction: column;
  `,
  ReviewButtonWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,
  ReviewButton: styled.div<{ isActive: boolean }>`
    width: 100%;
    height: 38px;
    border-radius: 10px;
    background-color: ${({ isActive }) => (isActive ? '#D3FBD4' : '#f0f0f0')};
    border: ${({ isActive }) => (isActive ? '1px solid #17AA1A' : 'none')};
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
  `,
  StarIcons: styled.div`
    display: flex;
    gap: 7px;
  `,
  Rate: styled.p`
    color: #080808;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 88.889% */
  `,

  RateWrapper: styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
  `,
  RateAddPlaceButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1.5px solid #f0f0f0;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 15px;
  `,
};
export default St;
