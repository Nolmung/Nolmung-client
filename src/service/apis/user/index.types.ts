/** user 도메인 관련 API Response 타입 */

export interface DogType {
  dogId: number;
  dogName: string;
  dogType: string;
  birth: string;
  profileUrl: string;
  gender: 'MALE' | 'FEMALE';
  size: 'S' | 'M' | 'L';
  neuterYn: boolean;
}
export interface DogsResponse {
  data: DogType[];
}

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
