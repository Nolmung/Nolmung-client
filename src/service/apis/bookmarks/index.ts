import { instance } from "..";
import { DeleteBookmarksResponse, GetBookmarksResponse, PostBookmarksResponse } from "./index.type";

export const postBookmarks = async (placeId: number): Promise<PostBookmarksResponse> => {
  const response = await instance.post<PostBookmarksResponse>('/bookmarks', {
    placeId,
  });
  return response.data;
};

export const getBookmarks = async (): Promise<GetBookmarksResponse> => {
  const category = 'ALL';
  const response = await instance.get<GetBookmarksResponse>(`/bookmarks?category=${category}`);
  return response.data;
}

export const deleteBookmarks = async (placeId: number): Promise<DeleteBookmarksResponse> => {
  const response = await instance.delete<DeleteBookmarksResponse>(`/bookmarks?bookmarkId=${placeId}`);
  return response.data;
}