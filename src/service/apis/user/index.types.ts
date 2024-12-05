/** user 도메인 관련 API Response 타입 */
export interface ReviewLabel {
  id: number;
  label: string;
}
export interface Review {
  id: number;
  placeName: string;
  address: string;
  rating: number;
  reviewLabels: ReviewLabel[];
}

export interface ReviewsResponse {
  data: Review[];
}
export interface UserType {
  userId: number;
  userName: string;
  userNickname: string;
  userAddressProvince: string;
  userAge: Age;
  userGender: Gender;
  userProfileImage: string;
  userEmail: string;
}

export type DogSize = 'S' | 'M' | 'L' | 'ALL';

export type Age = 10 | 20 | 30 | 40 | 50;

export type Gender = 'FEMALE' | 'MALE';
