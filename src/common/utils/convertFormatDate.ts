/**
 * 날짜 문자열을 YYYY.MM.DD 형식으로 변환하는 함수
 *
 * @param {string} isoString - ISO 8601 형식의 날짜 문자열 (예: "2024-12-16T14:16:26.890528")
 * @returns {string} YYYY.MM.DD 형식의 날짜 문자열
 */
export const convertFormatDate = (dateString: string) => {
  const date = new Date(dateString); // 문자열을 Date 객체로 변환

  // 연도, 월, 일 추출 및 형식 지정
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const convertTodaymungDetailDate = (dateString: string) => {
  const date = new Date(dateString); // 문자열을 Date 객체로 변환

  // 연도, 월, 일 추출 및 형식 지정
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};
