export interface PostDiaryResponse {
  status: string;
  message: string;
  data?: {
    diaryId: number;
    firstBadgeAdded: boolean;
    thirdBadgeAdded: boolean;
  };
}