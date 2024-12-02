import { GoBackIcon } from '@assets/images/svgs';
import { S } from '@common/components/header/index.styles';
import { HeaderType } from '@common/components/header/index.type';
import { match } from 'ts-pattern';
import { useNavigate } from 'react-router-dom';

function Header({ title, showIcon, type }: HeaderType) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      {match(type)
        .with('TitleLeft', () => (
          <S.LeftHeaderArea>
            {showIcon ? (
              <GoBackIcon
                onClick={handleGoBack}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <S.DummyIcon />
            )}
            <S.LeftTitleArea>{title}</S.LeftTitleArea>
          </S.LeftHeaderArea>
        ))
        .with('TitleCenter', () => (
          <S.CenterHeaderArea>
            {showIcon ? (
              <GoBackIcon
                onClick={handleGoBack}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <S.DummyIcon />
            )}
            <S.CenterTitleArea>{title}</S.CenterTitleArea>
          </S.CenterHeaderArea>
        ))
        .otherwise(() => null)}
    </>
  );
}

export default Header;
