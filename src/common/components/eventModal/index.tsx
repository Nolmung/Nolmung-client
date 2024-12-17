// import React from 'react';
import { S } from './index.styles';
import Modal from '../modal';

interface EventModalProps {
  closeModal: () => void;
  eventContent: {
    title: string;
    content: string;
    imgUrl: string;
  };
}

function EventModal({ closeModal, eventContent }: EventModalProps) {
  const modalContentWidth =
  window.innerWidth > 320 ? 'fit-content' : `${window.innerWidth * 0.9}px`;

  return (
    <Modal
      width={modalContentWidth + 'px'}
      height="fit-content"
      isOpen={true}
      closeModal={closeModal}
    >
      <S.ModalBackground>
        <S.ModalContent>
          <S.Title>{eventContent.title}</S.Title>
          <S.Main>{eventContent.content}</S.Main>
          <S.ImageWrapper url={eventContent.imgUrl}></S.ImageWrapper>
        </S.ModalContent>
      </S.ModalBackground>
    </Modal>
  );
}

export default EventModal;
