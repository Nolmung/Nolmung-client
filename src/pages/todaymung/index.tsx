import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import Convert from './components/convert';
import UserInfo from './components/userInfo';
import { S } from './styles/index.style';
import { getTodaymungList } from '@/service/apis/diary';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinnerLottie } from '@/common/components/lottie';

interface Diary {
  diaryId: number;
  title: string;
  content: string;
  publicYn: boolean;
  createdAt: string;
  mediaUrl: string;
}

interface User {
  userId: number;
  profileImageUrl: string;
  nickname: string;
}

interface TodaymungDataType {
  status: string;
  message: string;
  data: {
    user: User;
    diaries: Diary[];
  };
}

function Todaymung() {
  const {
    data: todaymungData,
    isLoading,
    isError,
  } = useQuery<TodaymungDataType>({
    queryKey: ['todaymungData'],
    queryFn: getTodaymungList,
  });
  console.log(todaymungData);
  useSetDocumentTitle('오늘멍 모아보기');

  if (isLoading) {
    return <LoadingSpinnerLottie />;
  }
  if (isError) {
    return <LoadingSpinnerLottie />;
  }
  return (
    <S.Wrapper>
      {todaymungData && (
        <>
          <UserInfo
            userData={todaymungData.data.user}
            diaryLength={todaymungData.data.diaries.length}
          />
          <Convert listData={todaymungData.data} />
        </>
      )}
    </S.Wrapper>
  );
}

export default Todaymung;
