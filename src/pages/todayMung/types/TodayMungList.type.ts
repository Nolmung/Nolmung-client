export interface ListDataType {
  user: {
    userId: number;
    profileImageUrl: string;
    nickname: string;
  };
  diaries: Array<{
    diaryId: number;
    title: string;
    content: string;
    publicYn: boolean;
    createdAt: string;
    mediaUrl: string;
  }>;
}

export interface ListDataProps {
  listData: ListDataType;
}

export interface CalendarDataProps {
  diaries: Array<{
    diaryId: number;
    title: string;
    content: string;
    publicYn: boolean;
    createdAt: string;
    mediaUrl: string;
  }>;
}

export interface ListCardProps {
  data: {
    diaryId: number;
    title: string;
    content: string;
    publicYn: boolean;
    createdAt: string;
    mediaUrl: string;
  };
  listData: {
    user: {
      userId: number;
      profileImageUrl: string;
      nickname: string;
    };
  };
}
