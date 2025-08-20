import axios from 'axios';

// 일반 함수 안에서 훅은 사용할 수 없다고 합니다..
// [ ] 이것도 그냥 컴포넌트 안에다가 넣기..ㅠ

export async function isTakenNickname(data: { nickname: string }): Promise<boolean> {
  try {
    const res = await axios.get(import.meta.env.VITE_NICK_CHECK_URL, {
      params: { nickname: data.nickname },
    });

    console.log(res);

    if (res.data === true) {
      console.log('중복임');
      return true;
    } else if (res.data === false) {
      console.log('중복 아님');
      return false;
    } else {
      throw new Error('서버 응답이 예상과 다름');
    }
  } catch (err) {
    console.error('에러 발생:', err);
    throw err;
  }
}
