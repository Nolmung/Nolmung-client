import { MediaType } from '@/service/apis/diary/index.type';
import { S } from '../../styles/ImageCard.style';
import { MediasType } from '../../types/DiaryType';
import { match } from 'ts-pattern';

const ImageCard = ({ data }: { data: MediasType }) => {
  return (
    <S.Wrapper>
      {match(data.mediaType)
        .with(MediaType.VIDEO, () => (
          <S.MediaViedo controls>
            <source src={data.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </S.MediaViedo>
        ))
        .with(MediaType.IMAGE, () => (
          <S.MediaImage src={data.mediaUrl} alt="Media Content"></S.MediaImage>
        ))
        .otherwise(() => (
          <div>UnKnow파일</div>
        ))}
    </S.Wrapper>
  );
};

export default ImageCard;
