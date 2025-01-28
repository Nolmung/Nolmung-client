import { DogSize } from '@/service/apis/user/index.types';
import S from '../../styles/profile.styles';
import { DogSizeMapping } from '../../constants/DogSizeMapping';
import { calculateAge } from '../../utils/calculateAge';
import { DogType } from '@/service/apis/dog/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@common/constants/route';

interface PetProfileProps {
  data?: DogType;
  userNickname?: string;
  isFirstDog?: boolean;
}

function PetProfileCard({
  data,
  userNickname,
  isFirstDog = false,
}: PetProfileProps) {
  const navigate = useNavigate();
  /** @Todo 반려견 정보 등록 후에 타입 수정하기 */
  const dogSize = data ? DogSizeMapping[data.size as DogSize] : '';

  const age = calculateAge(data?.birth);

  const handleCardClick = (dogId: number) => {
    navigate(ROUTE.DOGSEDIT(dogId), {
      state: { dogData: data, nickname: userNickname! },
    });
  };

  const handleDogRegisterClick = () => {
    navigate(ROUTE.MY_DOGS_ADD(), {
      state: { dogData: data, nickname: userNickname! },
    });
  };

  return (
    <>
      {data ? (
        <S.Wrapper onClick={() => handleCardClick(data.dogId)}>
          <S.Container>
            <S.ProfileWrapper>
              <S.ProfileContainer>
                <S.ProfileImg
                  alt="반려견 프로필 이미지"
                  width={68}
                  height={68}
                  src={data.profileUrl}
                  onError={(e) => {
                    e.currentTarget.src = '/svgs/todayMungNoListIcon.svg';
                    e.currentTarget.style.borderRadius = '0';
                  }}
                />
              </S.ProfileContainer>
              <S.ProfileTextWrapper>
                <S.FirstDogWrapper>
                  <S.ProfileNameText
                    aria-label={`반려견 이름: ${data.dogName}`}
                  >
                    {data.dogName}
                  </S.ProfileNameText>
                  {isFirstDog && (
                    <S.FirstDogLabel aria-label={`대표반려견 표시`}>
                      대표반려견
                    </S.FirstDogLabel>
                  )}
                </S.FirstDogWrapper>
                <S.ProfileLabelWrapper>
                  <S.ProfileLabel aria-label={`반려견 종: ${data.dogType}`}>
                    {data.dogType}
                  </S.ProfileLabel>
                  <S.LabelSeparate />
                  <S.ProfileLabel aria-label={`반려견 나이: ${age}살`}>
                    {age}살
                  </S.ProfileLabel>
                  <S.LabelSeparate />
                  <S.ProfileLabel aria-label={`반려견 크기: ${dogSize}`}>
                    {dogSize}
                  </S.ProfileLabel>
                </S.ProfileLabelWrapper>
              </S.ProfileTextWrapper>
            </S.ProfileWrapper>
          </S.Container>
        </S.Wrapper>
      ) : (
        <S.Wrapper role="button" onClick={handleDogRegisterClick}>
          <S.NoDataText aria-label="반려견을 등록해보세요!">
            반려견을 등록해보세요!
          </S.NoDataText>
        </S.Wrapper>
      )}
    </>
  );
}

export default PetProfileCard;
