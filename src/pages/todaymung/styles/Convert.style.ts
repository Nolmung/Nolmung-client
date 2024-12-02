import styled from 'styled-components';

export const S = {
  Wrapper: styled.div``,
  ConvertArea: styled.div`
    display: flex;
    width: 100%;
    height: 100% auto;

    text-align: center;
  `,
  ViewModeArea: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 146px;
    height: calc(100vh - 350px);
    overflow: auto;

    margin-top: 5px;
    @media (min-height: 800px) {
      margin-top: 10px;
    }
  `,

  CalendarMode: styled.div<{ mode: string }>`
    flex: 1;
    border-bottom: 1.5px solid
      ${(props) => (props.mode === 'list' ? '#f0f0f0' : '#5e5e5e')};
    padding-bottom: 10px;
    cursor: pointer;
  `,
  ListMode: styled.div<{ mode: string }>`
    flex: 1;
    border-bottom: 1.5px solid
      ${(props) => (props.mode === 'list' ? '#5e5e5e' : '#f0f0f0')};
    padding-bottom: 10px;
    cursor: pointer;
  `,
};
