import { S } from '@common/components/header/index.styles';
import { GoBackIcon } from '@/assets/images/svgs';
import { HeaderType } from '@/common/components/header/index.type';

function Header({ title, showIcon, type }: HeaderType) {
  return (
    <>
      {type === 1 && ( //type === 1 : title이 왼쪽에 있는경우
        <S.HeaderArea>
          {showIcon ? <GoBackIcon /> : <S.DummyIcon />}
          <S.TitleArea>{title}</S.TitleArea>
        </S.HeaderArea>
      )}

      {type === 2 && ( //type === 2 : title이 정중앙에 있는 경우
        <S.HeaderArea2>
          {showIcon ? <GoBackIcon /> : <S.DummyIcon />}
          <S.TitleArea2>{title}</S.TitleArea2>
        </S.HeaderArea2>
      )}
    </>
  );
}

export default Header;
