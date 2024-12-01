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
    font-weight: 500;
    line-height: normal;
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
    margin-top: 16px;
    &::placeholder {
      color: #a7a7a7;
      font-family: Pretendard;
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
      color: #a7a7a7;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
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
    padding-bottom: 20px;
  `,
};

export default S;
