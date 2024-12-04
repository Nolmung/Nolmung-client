import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    position: absolute;
    top: 19px;
    right: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 8px 0px #0000001a;
  `,
  EditArea: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 15px 20px;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
  `,
  EditText: styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19.09px;
    color: #5e5e5e;
  `,
  DeleteArea: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 15px 20px;
    cursor: pointer;
  `,
  DeleteText: styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19.09px;
    color: #5e5e5e;
  `,
};
