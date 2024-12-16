import { GoBackIcon } from '@assets/images/svgs';
import { S } from '@common/components/header/index.styles';
import { HeaderType } from '@common/components/header/index.type';
import { match } from 'ts-pattern';

/**
 * 공용으로 사용되는 헤더 컴포넌트입니다.
 *
 * @param {string} title - 헤더의 제목입니다.
 * @param {boolean} showIcon - 아이콘 표시 여부입니다.
 * @param {'TitleLeft' | 'TitleCenter'} type - 헤더 제목의 정렬 방식입니다.
 * @param {() => void} handleBackButtonClick - 뒤로 가기 버튼 클릭 이벤트 핸들러입니다.
 *
 * @example
 * <Header
 *   title="홈 화면"
 *   showIcon={true}
 *   type="TitleCenter"
 *   handleBackButtonClick={() => console.log('뒤로가기 클릭')}
 * />
 */
function Header({ title, showIcon, type, handleBackButtonClick }: HeaderType) {
  return (
    <>
      {match(type)
        .with('TitleLeft', () => (
          <S.LeftHeaderArea>
            <S.IconWrapper>
              {showIcon ? (
                <GoBackIcon onClick={handleBackButtonClick} />
              ) : (
                <S.DummyIcon />
              )}
            </S.IconWrapper>
            <S.LeftTitleArea>{title}</S.LeftTitleArea>
          </S.LeftHeaderArea>
        ))
        .with('TitleCenter', () => (
          <S.CenterHeaderArea>
            <S.IconWrapper>
              {showIcon ? (
                <GoBackIcon onClick={handleBackButtonClick} />
              ) : (
                <S.DummyIcon />
              )}
            </S.IconWrapper>
            <S.CenterTitleArea>{title}</S.CenterTitleArea>
          </S.CenterHeaderArea>
        ))
        .otherwise(() => null)}
    </>
  );
}

export default Header;
