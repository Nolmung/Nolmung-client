import { S } from '../../styles/TextContent.style';

interface TextContentProps {
  title: string;
  content: string;
}
const maxLength = 500;
const exampleText =
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video';

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Content>{exampleText}</S.Content>
      <S.ContentLength>
        {exampleText.length}/{maxLength}
      </S.ContentLength>
    </S.Wrapper>
  );
};

export default TextContent;
