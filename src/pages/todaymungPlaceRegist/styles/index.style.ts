import styled from 'styled-components';

const S = {
  Wrapper: styled.div.attrs<{ addPadding: boolean }>(() => ({
    className: 'scroll-container',
  }))`
    width: 100%;
    height: calc(80dvh);
    padding: ${({ addPadding }) => (addPadding ? '22px 0 170px 0' : '22px 0 ')};
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ButtonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 90px;
  `,
  SearchInputWrapper: styled.div`
    width: 100%;
    padding: 0 22px;
    margin-bottom: 22px;
  `,
  VisitedPlaceCard: styled.div`
    position: absolute;
    bottom: 150px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0 16px;
    width: calc(100% - 32px);
    overflow-x: auto;
    max-width: 423px;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: -4px;
    top: 0;
    transform: translateY;
    z-index: 10;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #a7a7a7;
    border-radius: 50%;
  `,
  CardWrapper: styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,

  /** 검색 기록 관련  */
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
    white-space: nowrap;

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

  NoResultWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 60px;
  `,
  NoResultSubText: styled.div`
    color: #5e5e5e;
    font-size: 16px;
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

  /** 모달 관련  */
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding-top: 35px;
    padding-bottom: 15px;
    box-sizing: border-box;
    border-radius: 12px;
    color: #343434;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%;
  `,
  ModalButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ConfirmModalContent: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  `,
  ConfirmModalTitle: styled.p`
    color: #080808;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
    text-align: center;
  `,
};

export default S;
