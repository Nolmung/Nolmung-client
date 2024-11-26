import { match } from 'ts-pattern';
import { S } from '@common/components/header/index.styles';
import { GoBackIcon } from '@assets/images/svgs';
import { HeaderType } from '@common/components/header/index.type';

function Header({ title, showIcon, type }: HeaderType) {
  return (
    <>
      {match(type)
        .with('TitleLeft', () => (
          <S.LeftHeaderArea>
            {showIcon ? <GoBackIcon /> : <S.DummyIcon />}
            <S.LeftTitleArea>{title}</S.LeftTitleArea>
          </S.LeftHeaderArea>
        ))
        .with('TitleCenter', () => (
          <S.CenterHeaderArea>
            {showIcon ? <GoBackIcon /> : <S.DummyIcon />}
            <S.CenterTitleArea>{title}</S.CenterTitleArea>
          </S.CenterHeaderArea>
        ))
        .otherwise(() => null)}
    </>
  );
}

export default Header;
