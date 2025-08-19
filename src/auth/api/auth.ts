import axios from 'axios';

// 일반 함수 안에서 훅은 사용할 수 없단다...
// 포털 로그인

export async function isTakenNickname(data: { nickname: string }): Promise<boolean> {
  try {
    const res = await axios.get(import.meta.env.VITE_NICK_CHECK_URL, {
      params: { nickname: data.nickname },
    });

    console.log(res);

    if (res.data === true) {
      //중복임
      console.log('중복임');
      return true;
    } else if (res.data === false) {
      //중복 아님
      console.log('중복 아님');
      return false;
    } else {
      // 예외 케이스: 서버가 true/false 아닌 값 반환
      throw new Error('서버 응답이 예상과 다름');
    }
  } catch (err) {
    console.error('에러 발생:', err);
    throw err;
  }
}
