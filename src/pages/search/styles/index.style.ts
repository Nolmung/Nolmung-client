import styled from 'styled-components';

export const S = {
  Header: styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    flex-direction: row;
    gap: 18px;
    padding: 27px 22px 36px 22px;
  `,
  IconWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Menu: styled.div`
    width: 100%;
    padding: 0 22px;
    color: #080808;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
  `,
  ClearAllButton: styled.button`
    border-radius: 50px;
    border: 1px solid #d9d9d9;
    width: 67px;
    height: 30px;
    flex-shrink: 0;
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: #fff;

    &:active {
      background-color: #f0f0f0;
      color: #333;
      border-color: #bdbdbd;
    }
  `,
  SearchHistory: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 44px;
  `,
  SearchHistoryList: styled.div`
    width: 100%;
    height: calc(100% - 170px);
    padding: 10px 22px;
    gap: 10px;
  `,
  TimeIconTextWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: #080808;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  CancelIconDateWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: #a7a7a7;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
};
