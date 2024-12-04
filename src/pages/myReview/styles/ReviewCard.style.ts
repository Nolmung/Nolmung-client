import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    padding: 15px 0px 25px 0px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  PlaceInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0px 22px;
  `,
  PlaceNameAddressWrapper: styled.div`
    display: flex;
    gap: 14px;
  `,
  PlaceNameAddressTrashCanWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  StarIconRateWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    justify-content: center;
  `,
  PlaceName: styled.p`
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Address: styled.p`
    color: #7c7c7c;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  Rate: styled.p`
    color: #080808;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.6px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LabelList: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    overflow-x: auto;
    padding: 0 22px;
  `,
};
export default S;
