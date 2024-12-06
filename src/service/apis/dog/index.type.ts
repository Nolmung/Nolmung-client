import { DogSize } from '../user/index.types';

export interface DogType {
  dogId: number;
  dogName: string;
  dogType: string;
  birth: string;
  profileUrl: string;
  gender: 'MALE' | 'FEMALE';
  size: DogSize;
  neuterYn: boolean;
}
export interface DogsResponse {
  data: DogType[];
}
