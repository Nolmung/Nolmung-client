import styled from 'styled-components';

const S = {
  PetButton: styled.button<{ selected: boolean }>`
    height: 42px;
    flex-shrink: 0;
    display: flex;
    gap: 6px;
    border-radius: 50px;
    align-items: center;
    padding-left: 6px;
    padding-right: 19px;
    justify-content: center;
    border: ${({ selected }) =>
      selected ? '1px solid #17aa1a' : '1px solid #D9D9D9'};
    background-color: ${({ selected }) => (selected ? '#D3FBD4' : ' #F0F0F0')};
  `,
  PetImage: styled.img`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50px;
  `,
  PetName: styled.div<{ selected: boolean }>`
    color: ${({ selected }) => (selected ? '#17AA1A' : '#5E5E5E')};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
};

export default S;
