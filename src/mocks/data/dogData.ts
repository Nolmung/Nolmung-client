import { DogType } from "@/service/apis/user/index.types";

export const dogData: DogType[] = [
  {
    dogId: 1,
    dogName: '장미',
    dogType: '푸들',
    birth: '2018-05-18',
    profileUrl: '이미지 url',
    gender: 'MALE',
    size: 'M',
    neuterYn: false,
  },
  {
    dogId: 2,
    dogName: '백합',
    dogType: '요크셔테리어',
    birth: '2020-05-15',
    profileUrl: '이미지 url',
    gender: 'FEMALE',
    size: 'S',
    neuterYn: true,
  },
];
