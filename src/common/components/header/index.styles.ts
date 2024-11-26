import styled from 'styled-components';

export const S = {
  LeftHeaderArea: styled.div`
    display: flex;
    width: 100%;
    min-width: 320px;
    height: 100%;
    max-height: 70px;
    align-items: center;
    position: sticky;
    background-color: #fff;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 28px 22px;
    gap: 15px;
  `,

  DummyIcon: styled.div`
    width: 24px;
    height: 24px;
    visibility: hidden;
  `,

  LeftTitleArea: styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
  `,

  CenterHeaderArea: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    width: 100%;
    min-width: 320px;
    height: 100%;
    max-height: 70px;
    background-color: #fff;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 28px 22px;
  `,

  CenterTitleArea: styled.div`
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
  `,
};
