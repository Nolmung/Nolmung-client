/** Label 타입 정의 */
export interface ReviewKeyword {
  label_id: number; // 라벨 ID
  count: number; // 라벨 사용 횟수
}

/** 오늘멍 타입 정의 */
export interface Diary {
  diary_id: number; // 오늘멍 ID
  diary_name: string; // 오늘멍 제목
  diary_writer: string; // 작성자
  created_at: string; // 작성 날짜
  image_url: string; // 이미지 URL
  rating: string; // 별점
}

export type PlacePrice = '변동' | '없음' | string;