import styled from 'styled-components';

export const S = {
  ConvertArea: styled.div`
    display: flex;
    width: 100%;
    text-align: center;
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
