import { instance } from '..'; // axios instance를 가져옵니다.

interface SignUpRequest {
  userNickname: string;
  userAddressProvince: string;
  userLat: number;
  userLong: number;
  userBirth: string;
  userGender: 'FEMALE' | 'MALE';
}

export const postSignUp = async (
  userId: string,
  requestBody: SignUpRequest,
) => {
  try {
    const response = await instance.post(
      `/users/signup/${userId}`,
      requestBody,
    );
    return response.data; // 필요한 데이터를 반환
  } catch (error: any) {
    if (error.response) {
      console.error(
        '회원가입 중 오류:',
        error.response.status,
        error.response.data,
      );
      throw new Error(error.response.data.message || '회원가입 요청 실패');
    } else if (error.request) {
      console.error('요청이 서버에 도달하지 못했습니다:', error.request);
      throw new Error('요청이 서버에 도달하지 못했습니다.');
    } else {
      console.error('예기치 못한 오류 발생:', error.message);
      throw new Error('예기치 못한 오류 발생.');
    }
  }
};
