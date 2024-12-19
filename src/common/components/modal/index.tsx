import { S } from './index.styles';
import { ModalProps } from './index.type';

const Modal = ({ width, height, isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.ModalWrapper>
      <S.ModalBackground
        onClick={() => {
          closeModal();
        }}
      />
      <S.ModalContent width={width} height={height}>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
