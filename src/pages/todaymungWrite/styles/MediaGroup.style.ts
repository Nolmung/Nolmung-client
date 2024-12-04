import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-top: 8px;
    gap: 8px;
    overflow: auto;
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
  MediaWrapper: styled.div`
    width: 95px;
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
    flex-shrink: 0;
  `,
  Media: styled.img`
    width: 86px;
    height: 86px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    object-fit: contain;
  `,
  IconWrapper: styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 5px;
    width: 18px;
    height: 18px;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: #d3fbd4;
  `,
};
export default S;
