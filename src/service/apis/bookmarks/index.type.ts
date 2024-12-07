export interface PostBookmarksResponse {
  status: 'SUCCESS' | 'BAD_REQUEST';
  message: string;
  data?: number; // 필요한 경우 추가 데이터 포함
}