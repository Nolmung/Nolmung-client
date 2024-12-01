import S from '../styles/Editor.style';
import { useTodayMungStore } from '../stores/todayMungStore';
function Editor() {
  const { content, setContent, title, setTitle } = useTodayMungStore();
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <S.Wrapper>
      <S.TodayMungTitleInput
        value={title}
        onChange={handleTitleChange}
        placeholder="제목"
      />
      <S.TodayMungContentInput
        value={content}
        maxLength={500}
        onChange={handleContentChange}
        placeholder={`오늘멍을 작성해주세요 \n오늘멍을 공개로 설정하면 리뷰에 등록됩니다`}
      />
      <S.TodayMungTextCount>{content.length}/500</S.TodayMungTextCount>
    </S.Wrapper>
  );
}

export default Editor;
