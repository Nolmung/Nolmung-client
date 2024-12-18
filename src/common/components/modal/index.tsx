import { S } from './index.styles';
import { ModalProps } from './index.type';
import ReactDOM from 'react-dom';

const Modal = ({ width, height, isOpen, closeModal, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalBackground
        onClick={() => {
          closeModal();
        }}
      />
      <S.ModalContent width={width} height={height}>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;
