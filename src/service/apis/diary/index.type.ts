export enum MideaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface Media {
  mediaId: number | null;
  mediaType: MideaType | null;
  mediaUrl: string | null;
}
export interface PostDiaryRequest {
  title: string | null;
  content: string | null;
  places: number[] | null;
  medias: Media[] | null;
  dogs: number[] | null;
  publicYn: boolean | null;
}
