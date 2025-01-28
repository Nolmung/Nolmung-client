import { S } from '../../styles/TextContent.style';

interface TextContentProps {
  title: string;
  content: string;
}
const maxLength = 500;

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      <S.Title aria-label={'제목: ' + title}>{title}</S.Title>
      <S.Content aria-label={'내용: ' + content}>{content}</S.Content>
      <S.ContentLength>
        {content.length}/{maxLength}
      </S.ContentLength>
    </S.Wrapper>
  );
};

export default TextContent;
