import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    margin-top: 53px;
  `,
  Title: styled.p`
    color: #080808;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 88.889% */
    white-space: nowrap;
    flex-shrink: 0;
  `,
  TitleExplanation: styled.div`
    color: #5e5e5e;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
    margin-top: 10px;
    overflow: hidden;
  `,

  PlaceList: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    overflow: auto;
    margin-top: 25px;
    padding-bottom: 40px;
  `,
  PlaceWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  PlaceImage: styled.img`
    width: 80vw;
    height: 90vw;
    max-width: 312px;
    max-height: 341px;
    flex-shrink: 0;
    border-radius: 10px;
    object-fit: cover;
  `,
  NameAddressWrapper: styled.div`
    display: flex;
    gap: 6px;
    margin-top: 16px;
  `,
  PlaceName: styled.p`
    color: #080808;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 106.667% */
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  PlaceAddress: styled.p`
    color: #a7a7a7;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    white-space: nowrap;
  `,
  PlaceExplanation: styled.p`
    color: #5e5e5e;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 123.077% */
    margin-top: 7px;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

export default S;
