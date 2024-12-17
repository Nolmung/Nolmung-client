import { useState } from 'react';
import { S } from '../../styles/UserInfo.style';

import { UserInfoTypes } from '../../types/UserInfo.type';

import EventModal from '@/common/components/eventModal';
import { EventContents } from '@/common/components/eventModal/eventContents';
import { useGetBadgesData } from '../../queries';

const UserInfo = ({ userData, diaryLength }: UserInfoTypes) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [eventContent, setEventContent] = useState({ title: '', content: '', imgUrl: '' });

  const { data: badges } = useGetBadgesData();

  const handleBadgeClick = (badgeId: number) => {
    if (badgeId === 1) {
      setEventContent(EventContents[0]);
    } else if (badgeId === 2) {
      setEventContent(EventContents[1]);
    }
    setIsEventModalOpen(true);
  };

  return (
    <S.ProfileArea>
      <S.ProfileImg src={userData.profileImageUrl} />
      <S.ProfileDescription>
        <S.NameWrapper>
          <S.ProfileName>{userData.nickname}</S.ProfileName>
          {badges && badges?.length > 0 && (
            <S.ImageWrapper>
              {badges.map((badge, index) => (
                <S.Button onClick={() => handleBadgeClick(badge.badgeCodeId)}>
                  <S.Image
                    key={index}
                    src={EventContents[badge.badgeCodeId - 1].imgUrl}
                  />
                </S.Button>
              ))}
            </S.ImageWrapper>
          )}
        </S.NameWrapper>

        <S.ProfileSubTextArea>
          <S.TodayMungLength>{diaryLength}번</S.TodayMungLength>
          <S.TodayMungLengthDescription>
            현재 작성한 오늘멍
          </S.TodayMungLengthDescription>
        </S.ProfileSubTextArea>
      </S.ProfileDescription>
      {isEventModalOpen && (
        <EventModal
          closeModal={() => setIsEventModalOpen(false)}
          eventContent={eventContent}
        />
      )}
    </S.ProfileArea>
  );
};

export default UserInfo;
