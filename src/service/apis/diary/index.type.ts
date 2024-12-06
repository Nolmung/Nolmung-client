export enum MideaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface Media {
  mediaId: number;
  mediaType: MideaType;
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
