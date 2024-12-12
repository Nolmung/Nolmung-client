import styled from 'styled-components';

const S = {
  Wrapper: styled.button`
    width: 100%;
    border-radius: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    min-width: 276px;
    border: 1.5px solid rgba(217, 217, 217, 0.63);
    background-color: #fdfdfd;

    &:active {
      border: 1.5px solid #17aa1a;
      background-color: #d3fbd4;
    }
  `,
  Container: styled.div`
    width: 100%;
    height: fit-content;
  `,
  ProfileContainer: styled.div`
    width: fit-content;
    height: fit-content;
  `,
  ProfileWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
  `,
  ProfileImg: styled.img<{ width: number; height: number }>`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    border-radius: 50%;
    object-fit: cover;
  `,
  ProfileTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  `,
  ProfileNameText: styled.span`
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
  `,
  ProfileLabelWrapper: styled.div`
    width: fit-content;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    display: flex;
    align-items: center;
  `,

  ProfileLabel: styled.div`
    width: fit-content;
    color: #7e7e7e;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 157%;
    white-space: nowrap;
  `,
  LabelSeparate: styled.div`
    width: 1px;
    height: 11px;
    background-color: #7e7e7e;
  `,
  NoDataText: styled.span`
    font-size: medium;
    white-space: nowrap;
  `,
};

export default S;
