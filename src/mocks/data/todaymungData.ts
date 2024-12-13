export const todaymungData = {
  status: 'SUCCESS',
  message: '일기 조회에 성공하였습니다.',
  data: {
    user: {
      userId: 2,
      profileImageUrl:
        'http://k.kakaocdn.net/dn/p2aTu/btsKNuhIyc0/MpTPECq8epgPj3yTA2vHu1/img_640x640.jpg',
      nickname: '혜원짱',
    },
    diaries: [
      {
        diaryId: 30,
        title: '강쥐들이랑',
        content: '재미난하루',
        publicYn: true,
        createdAt: '2024.12.13',
        mediaList: [
          {
            mediaId: 58,
            mediaType: 'VIDEO',
            mediaUrl:
              'https://nolmung.s3.ap-northeast-2.amazonaws.com/todaymungs/1734049342605_IMG_8554.mov',
          },
          {
            mediaId: 64,
            mediaType: 'IMAGE',
            mediaUrl:
              'https://nolmung.s3.ap-northeast-2.amazonaws.com/todaymungs/1733990530725_IMG_3382.jpeg',
          },
        ],
      },
      {
        diaryId: 26,
        title: '오늘은 칸쵸랑 다녀왔어요',
        content: '나들이 갔다왔어용',
        publicYn: true,
        createdAt: '2024.12.12',
        mediaList: [
          {
            mediaId: 57,
            mediaType: 'VIDEO',
            mediaUrl:
              'https://nolmung.s3.ap-northeast-2.amazonaws.com/todaymungs/1734009208437__talkv_wwJjMRgdpP_QTwPBlG0C9BcmZUeplKZK1_talkv_high.mp4',
          },
        ],
      },
    ],
  },
};
