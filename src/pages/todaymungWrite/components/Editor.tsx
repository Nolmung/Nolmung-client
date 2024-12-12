import S from '../styles/Editor.style';
import { useTodayMungStore } from '../stores/todayMungStore';
import { CheckEmptyGreen, CheckFiiledDark } from '@/assets/images/svgs';

function Editor() {
  const { content, setContent, title, setTitle } = useTodayMungStore();
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const { publicYn, setPublicYn } = useTodayMungStore();
  const handleCheckBoxClick = () => {
    setPublicYn(!publicYn);
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
        placeholder={`오늘멍은 하루에 한 번만 작성 가능해요`}
      />
      <S.InFormPublicCheckBoxWrapper>
        <S.InformPublic>
          {publicYn ? (
            <S.IconWrapper>
              <CheckFiiledDark onClick={handleCheckBoxClick} width={18} />
            </S.IconWrapper>
          ) : (
            <S.IconWrapper>
              <CheckEmptyGreen onClick={handleCheckBoxClick} width={18} />
            </S.IconWrapper>
          )}
          오늘멍을 공개할래요
        </S.InformPublic>
        <S.TodayMungTextCount>{content.length}/500</S.TodayMungTextCount>
      </S.InFormPublicCheckBoxWrapper>
    </S.Wrapper>
  );
}

export default Editor;
