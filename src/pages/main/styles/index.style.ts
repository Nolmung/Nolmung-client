import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
  `,

  MapWrapper: styled.div`
    width: 100%;
    height: calc(100vh - 92px);
    flex: 1;
  `,

  SearchCurrentButton: styled.div<{
    bottomHeight: number;
    buttonGap: number;
  }>`
    display: flex;
    height: 36px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 50px;
    border: 1px solid #080808;
    background: rgba(8, 8, 8, 0.65);

    z-index: 1;
    position: absolute;
    // 조건부 스타일링으로 바꾸기
    bottom: ${({ bottomHeight, buttonGap }) => bottomHeight + buttonGap}px;
    left: 50%;
    transform: translateX(-50%);
    :active {
      transform: none;
    }
  `,

  SearchCurrentButtonText: styled.span`
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 350;
    line-height: 10px; /* 83.333% */
    letter-spacing: -0.12px;
  `,

  Bottom: styled.div<{ bottomHeight: number; buttonGap: number }>`
    position: absolute;
    bottom: ${({ bottomHeight }) => bottomHeight}px;
    background-color: white;
  `,

  BottomSheetWrapper: styled.div`
    height: 100dvh;
    width: 100%;
    position: relative;
  `,
};

export default S;
