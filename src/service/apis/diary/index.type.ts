export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface Media {
  mediaId: number;
  mediaType: MediaType;
  mediaUrl: string;
}
export interface PostDiaryRequest {
  title: string;
  content: string;
  places: number[];
  medias: Media[];
  dogs: number[];
  publicYn: boolean;
}

export interface EditDiaryRequest {
  title: string;
  content: string;
  medias: Media[];
  dogs: number[];
  publicYn: boolean;
}
