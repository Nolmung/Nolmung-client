import { Bookmark } from "@/common/types";

export interface PostBookmarksResponse {
  status: 'SUCCESS' | 'BAD_REQUEST';
  message: string;
  data?: number;
}

export interface GetBookmarksResponse {
  status: 'SUCCESS' | 'BAD_REQUEST' | 'NOT_FOUND';
  message: string;
  data?: Bookmark[];
}

export interface DeleteBookmarksResponse {
  status: 'SUCCESS' | 'BAD_REQUEST' | 'NOT_FOUND';
  message: string;
}