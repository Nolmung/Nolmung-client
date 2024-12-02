import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 60px;
    padding: 10px 22px;
    border-bottom: 1.5px solid #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  PlaceName: styled.div`
    color: #080808;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  `,
  Address: styled.div`
    color: #5e5e5e;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
  `,
  IconWrapper: styled.div`
    width: 14px;
    height: 14px;
    background-color: black;
  `,
  ResultWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* gap: 5px; */
  `,
};

export default S;
