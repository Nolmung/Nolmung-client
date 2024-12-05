export enum MideaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface Media {
  mediaId: number;
  mediaType: string;
  mediaUrl: string;
}
export interface PostDiaryRequest {
  title: string;
  content: string;
  places: number[];
  medias: Media[];
  dogIds: number[];
  publicYn: boolean;
}
