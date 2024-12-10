import { GoBackIcon } from '@assets/images/svgs';
import { S } from '@common/components/header/index.styles';
import { HeaderType } from '@common/components/header/index.type';
import { match } from 'ts-pattern';

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
