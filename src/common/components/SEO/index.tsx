import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

function SEO({ title, description, image }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={
          image
            ? image
            : 'https://nolmung.s3.ap-northeast-2.amazonaws.com/official/NolmungOfficial.png'
        }
      />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta
        property="og:description"
        content={
          description
            ? description
            : '내 반려견과의 즐거운 오늘을 기록하다, 놀멍'
        }
      />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
}

export default SEO;
