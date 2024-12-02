import KEYWORDS from '../constants/reviewLabels';

/** 리뷰 키워드 객체를 리뷰 id로 찾는 함수 */
const findKeywordById = (labelId: number) => {
  return Object.values(KEYWORDS)
    .flat()
    .find((keyword) => keyword.labelId === labelId);
};

export default findKeywordById;
