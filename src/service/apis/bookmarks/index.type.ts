export interface PostBookmarksResponse {
  status: 'SUCCESS' | 'BAD_REQUEST';
  message: string;
  data?: number;
}