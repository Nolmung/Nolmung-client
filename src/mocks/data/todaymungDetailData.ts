export const todaymungDetailData = {
  status: 'SUCCESS',
  message: '일기 상세조회에 성공하였습니다.',
  data: {
    diaryId: 3,
    title: '우리 강아지와의 행복한 하루',
    content: '오늘은 강아지들과 공원에 갔어요.',
    publicYn: true,
    createdAt: '2024.11.28',
    dogs: [
      {
        dogId: 1,
        dogProfileImageUrl: 'https://s3.amazonaws.com/mybucket/image1.jpg',
      },
      {
        dogId: 2,
        dogProfileImageUrl: '',
      },
      {
        dogId: 3,
        dogProfileImageUrl: '',
      },
    ],
    places: [
      {
        placeId: 1,
        placeName: '38도씨식당',
        roadAddress: '서울특별시 마포구 와우산로17길 19-17 2층',
        address: '서울특별시 마포구 서교동 409-11',
        ratingAvg: 0.0,
      },
      {
        placeId: 2,
        placeName: '가든블루',
        roadAddress: '경기도 포천시 이동면 화동로 2236-34',
        address: '경기도 포천시 이동면 장암리 634-1',
        ratingAvg: 0.0,
      },
    ],
    medias: [
      {
        mediaId: 1,
        mediaType: 'IMAGE',
        mediaUrl: 'https://s3.amazonaws.com/mybucket/image1.jpg',
      },
      {
        mediaId: 2,
        mediaType: 'VIDEO',
        mediaUrl: 'https://s3.amazonaws.com/mybucket/video1.mp4',
      },
    ],
  },
};
