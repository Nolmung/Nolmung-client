import { StandBrownDog } from '@/assets/images/svgs';
import Modal from '../modal';
import { S } from './index.style';
import { useNavigate } from 'react-router-dom';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import { ROUTE } from '@/common/constants/route';

interface LoginPromptModalProps {
  closeModal: () => void;
}

function LoginPromptModal({ closeModal }: LoginPromptModalProps) {
  const navigate = useNavigate();

  const { isOpen, close } = useLoginPromptModalStore();

  const modalContentHeight =
    window.innerHeight * 0.4 < 400 ? 400 : window.innerHeight * 0.4;

  const modalContentWidth =
    window.innerWidth * 0.7 > 400 ? 400 : window.innerWidth * 0.7;

  const handleLoginButtonClick = () => {
    close();
    navigate(ROUTE.LOGIN(), { replace: true });
  };

  return (
    <Modal
      height={modalContentHeight + 'px'}
      width={modalContentWidth + 'px'}
      isOpen={isOpen}
      closeModal={closeModal || (() => {})}
    >
      <S.Wrapper>
        <S.Title>
          반려견과 함께할 <br />
          모든순간을 기록해보세요!
        </S.Title>
        <S.Explanation>
          지금 바로 회원가입하고, <br /> 우리 아이와의 추억을 특별하게
          기록해보세요.
        </S.Explanation>
        <S.IconWrapper>
          <StandBrownDog height={'70%'} />
        </S.IconWrapper>
        <S.LoginPromptButtonWrapper>
          <S.LoginPromptButton onClick={handleLoginButtonClick}>
            5초 회원가입 / 로그인
          </S.LoginPromptButton>
        </S.LoginPromptButtonWrapper>
      </S.Wrapper>
    </Modal>
  );
}

export default LoginPromptModal;
