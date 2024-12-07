import { instance } from "..";
import { PostBookmarksResponse } from "./index.type";

export const postBookmarks = async (placeId: number): Promise<PostBookmarksResponse> => {
  const response = await instance.post<PostBookmarksResponse>('/bookmarks', {
    placeId,
  });
  return response.data;
};