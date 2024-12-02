import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: aqua;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 22px;
    height: fit-content;
    width: 100%;
    background-color: beige;
  `,
  MyProfileCard: styled.div`
    margin: 26px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    background-color: violet;
  `,
  PetProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 120px;
    gap: 8px;
    background-color: red;
  `,
  PetProfileCard: styled.div`

  `,






}

export default S;