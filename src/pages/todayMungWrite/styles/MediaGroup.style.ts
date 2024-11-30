import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    margin-top: 8px;
  `,
  AddMediaButton: styled.button`
    width: 86px;
    height: 86px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #f0f0f0;
    border-radius: 10px;
    background: #f0f0f0;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Media: styled.img`
    width: 86px;
    height: 86px;
    border-radius: 10px;
    object-fit: cover;
  `,
};
export default S;
