export interface MediaType {
  mediaId: number;
  mediaType: string;
  mediaUrl: string;
}

export interface DiaryType {
  diaryId: number;
  title: string;
  content: string;
  publicYn: boolean;
  createdAt: string;
  mediaList?: MediaType[];
}

export interface UserType {
  userId: number;
  profileImageUrl: string;
  nickname: string;
}

export interface ListDataType {
  user: UserType;
  diaries: DiaryType[];
}

export interface ListDataProps {
  listData: ListDataType;
}

export interface CalendarDataProps {
  diaries: DiaryType[];
}

export interface ListCardProps {
  data: DiaryType;
  listData: {
    user: UserType;
  };
}

export interface DetailProps extends DiaryType {}
