import { S } from '../../styles/TextContent.style';

interface TextContentProps {
  title: string;
  content: string;
}
const maxLength = 500;

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
      <S.ContentLength>
        {content.length}/{maxLength}
      </S.ContentLength>
    </S.Wrapper>
  );
};

export default TextContent;
