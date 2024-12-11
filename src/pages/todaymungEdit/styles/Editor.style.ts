import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 285px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    padding: 0 22px;
    margin-top: 10px;
  `,
  TodayMungTitleInput: styled.input`
    width: 100%;
    height: 30px;
    color: #080808;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    border-radius: 0%;
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
    margin-top: 16px;

    &::placeholder {
      color: #a7a7a7;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &:focus {
      outline: none;
    }
  `,
  TodayMungContentInput: styled.textarea`
    width: 100%;
    height: calc(100% - 48px - 40px);
    border: none;
    border-radius: 15px;
    padding-top: 15px;

    color: #080808;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    resize: none;

    &::placeholder {
      color: rgba(167, 167, 167, 0.5);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    &:focus {
      outline: none;
    }
  `,
  TodayMungTextCount: styled.div`
    color: #a7a7a7;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: right;
  `,

  InformPublic: styled.div`
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    gap: 5px;
    justify-content: end;
    align-items: center;
  `,
  InFormPublicCheckBoxWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  `,
  IconWrapper: styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  `,
};

export default S;
