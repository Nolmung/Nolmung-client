// import React from 'react';
import { S } from './index.styles';
import Modal from '../modal';
import Confetti from 'react-confetti';
import { useEffect } from 'react';

interface EventModalProps {
  closeModal: () => void;
  eventContent: {
    title: string;
    content: string;
    imgUrl: string;
  };
  isNewEvent: boolean;
}

function EventModal({ closeModal, eventContent, isNewEvent }: EventModalProps) {
  const modalContentWidth =
    window.innerWidth > 320 ? 'fit-content' : `${window.innerWidth * 0.9}px`;

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = src;
  };
  // 모달 컴포넌트 마운트 시 이미지 Preload
  useEffect(() => {
    preloadImage('/webps/event_todaymung.webp');
    preloadImage(eventContent.imgUrl);
  }, []);

  return (
    <>
      <Modal
        width={modalContentWidth + 'px'}
        height="fit-content"
        isOpen={true}
        closeModal={closeModal}
      >
        {isNewEvent && (
          <S.ConfettiWrapper>
            <Confetti
              width={423}
              height={window.innerHeight}
              numberOfPieces={60}
              colors={['#FBD965']}
            />
          </S.ConfettiWrapper>
        )}
        <S.ModalBackground>
          <S.ModalContent>
            <S.Title>{eventContent.title}</S.Title>
            <S.Main>{eventContent.content}</S.Main>
            <S.ImageWrapper>
              <img width="92px" height="122px" src={eventContent.imgUrl} alt="이벤트 이미지" />
            </S.ImageWrapper>
          </S.ModalContent>
        </S.ModalBackground>
      </Modal>
    </>
  );
}

export default EventModal;
