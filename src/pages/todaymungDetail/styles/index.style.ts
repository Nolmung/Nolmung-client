import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100dvh - 160px);
    color: #080808;
    overflow: scroll;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 0px 22px;
  `,
  DateArea: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
  DiaryCreatedAt: styled.div`
    font-size: 17px;
    font-weight: 600;
    color: #080808;
    padding: 20px 0px;
    line-height: 20.29px;
  `,
  PlaceArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  PlaceAreaTitle: styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 16.71px;
  `,
  PlaceTagCardArea: styled.div`
    display: flex;
    gap: 20px;
    overflow-x: scroll;
  `,
  DogsArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
  `,
  DogsAreaTitle: styled.div`
    font-size: 16px;
    font-weight: 600;
  `,
  DogTagList: styled.div`
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: row;
  `,
  TextContentArea: styled.div``,
  MediaFileArea: styled.div`
    height: 130px;
    display: flex;
    gap: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-top: 8px;
    @media (min-height: 800px) {
      margin-top: 20px;
    }
  `,
  DummyImage: styled.div`
    width: 130px;
    height: 130px;
    border-radius: 10px;
    flex-shrink: 0;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
