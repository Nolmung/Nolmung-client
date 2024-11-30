import { useState } from 'react';
import S from '../styles/Editor.style';
function Editor() {
  const [currentTextCount, setCurrentTextCount] = useState(0);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTextCount(e.target.value.length);
  };
  return (
    <S.Wrapper>
      <S.TodayMungTitleInput placeholder="제목" />
      <S.TodayMungContentInput
        maxLength={500}
        onChange={handleContentChange}
        placeholder={`오늘멍을 작성해주세요 \n오늘멍을 공개로 설정하면 리뷰에 등록됩니다`}
      />
      <S.TodayMungTextCount>{currentTextCount}/500</S.TodayMungTextCount>
    </S.Wrapper>
  );
}

export default Editor;
