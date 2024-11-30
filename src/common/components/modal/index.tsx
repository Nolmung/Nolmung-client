import { S } from './index.styles';
import { ModalProps } from './index.type';

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.ModalWrapper>
      <S.ModalBackground onClick={closeModal} />
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
