import { PlusIcon } from '@/assets/images/svgs';
import VisitedPlaceCard from './components/VisitedPlaceCard';
import S from './styles/index.style';
import DogCard from './components/DogCard';
import Editor from './components/Editor';

const dogs = [
  {
    dogId: 1,
    dogName: '뽀삐',
    dogType: '푸들',
    birth: '2019.01.01',
    profileUrl:
      'https://plus.unsplash.com/premium_photo-1723709016897-3cc15635e618?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTlFJUFDJUVCJUFGJUI4JUVDJTlFJTg4JUVCJThBJTk0JTIwJUVBJUIwJTk1JUVDJTk1JTg0JUVDJUE3JTgwJTIwJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww',
    gender: 'MALE',
    size: 'M',
    neuterYn: true,
  },
  {
    dogId: 2,
    dogName: '장미',
    dogType: '말티즈',
    birth: '2024.01.01',
    profileUrl:
      'https://plus.unsplash.com/premium_photo-1723709016897-3cc15635e618?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTlFJUFDJUVCJUFGJUI4JUVDJTlFJTg4JUVCJThBJTk0JTIwJUVBJUIwJTk1JUVDJTk1JTg0JUVDJUE3JTgwJTIwJUVDJTgyJUFDJUVDJUE3JTg0fGVufDB8fDB8fHww',
    gender: 'FEMALE',
    size: 'S',
    neuterYn: true,
  },
];

const mocks = [
  {
    place_name: '마포구청',
    road_address: '서울 마포구 월드컵로 212',
    my_rate: '4.5',
  },
  {
    place_name: '마포구청',
    road_address: '서울 용산구 구대로 2층',
    my_rate: '4.5',
  },
  {
    place_name: '마포구청',
    road_address: '서울 노원구 한글비석로 8길 41',
    my_rate: '4.5',
  },
  {
    place_name: '마포구청',
    road_address: '서울 마포구 월드컵로 212',
    my_rate: '4.5',
  },
  {
    place_name: '마포구청',
    road_address: '서울 마포구 월드컵로 212',
    my_rate: '4.5',
  },
];

function TodayMungWrite() {
  return (
    <S.Wrapper>
      <div style={{ marginTop: '23px' }}>
        <S.Title>장소</S.Title>
        <S.PlaceWrapper>
          <S.PlaceCardWrapper>
            {mocks.map((mock, index) => (
              <VisitedPlaceCard
                key={index}
                place_name={mock.place_name}
                road_address={mock.road_address}
                my_rate={mock.my_rate}
              />
            ))}
          </S.PlaceCardWrapper>
          <S.PlaceAddButton>
            <PlusIcon width={20} height={20} />
          </S.PlaceAddButton>
        </S.PlaceWrapper>
      </div>
      <div>
        <S.Title>오늘을 함꼐한 반려견</S.Title>
        <S.PlaceWrapper>
          <S.PlaceCardWrapper>
            {dogs.map((mock, index) => (
              <DogCard
                key={index}
                dogName={mock.dogName}
                profileUrl={mock.profileUrl}
              />
            ))}
          </S.PlaceCardWrapper>
        </S.PlaceWrapper>
      </div>
      <Editor />
    </S.Wrapper>
  );
}

export default TodayMungWrite;
