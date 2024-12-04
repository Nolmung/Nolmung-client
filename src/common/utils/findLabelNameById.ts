import KEYWORDS from '../constants/reviewLabels';

/** 리뷰 키워드 객체를 리뷰 id로 찾는 함수 */
const findLabelNameById = (labelId: number) => {
  return (
    Object.values(KEYWORDS)
      .flat()
      .find((keyword) => keyword.labelId === labelId)?.labelName ||
    '강아지가 좋아해요'
  );
};

export default findLabelNameById;
