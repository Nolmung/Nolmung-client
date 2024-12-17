import styled from 'styled-components';

export const S = {
  Wrapper: styled.div``,
  ConvertArea: styled.div`
    display: flex;
    width: 100%;
    height: 100% auto;
    text-align: center;
  `,
  ViewModeArea: styled.div<{ $CalendarView: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100dvh - 295px);
    overflow: scroll;
    margin-top: 5px;
    @media (min-height: 850px) {
      margin-top: ${(props) => (props.$CalendarView ? '-30px' : '5px')};
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
