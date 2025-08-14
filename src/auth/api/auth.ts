import { useAuthStore } from '@/auth/stores/authStore';
import axios from 'axios';

//인스턴스
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    //Authorization: `Bearer ${accessToken}`, //access 토큰을 zustand에 저장해둘꺼니까?
  },
  responseType: 'json',
});

//요청 인터셉터
instance.interceptors.request.use(
  config => {
    //요청이 전단되기 전 작업

    return config;
  },
  error => {
    //요청 오류가 있는 작업
    console.log(error);
    return Promise.reject(error);
  },
);

//응답 인터셉터
instance.interceptors.response.use(
  response => {
    // 2xx 범위에 있는 상태 코드가 이 함수 실행
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  error => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

export async function SignUp(data: {
  studentId: string;
  department: string;
  studentType: string;
  nickname: string;
}) {
  const setTokens = useAuthStore();
  const res = await axios.post(import.meta.env.VITE_SIGN_UP_URL, data);
  try {
    if (res.status === 201) {
      //회원가입 성공 시
      //토큰 저장.
      const { accessToken, refreshToken } = res.data;
      useAuthStore.getState().setTokens(accessToken, refreshToken);
      alert('회원가입 성공');
    }
  } catch {}
}

// [ ]
async function PortalLogin(data: { studentId: string; password: string }) {
  const res = await axios.post(import.meta.env.VITE_PORTAL_URL, {
    studentId: data.studentId,
    password: data.password,
  });
  return res;
}

export async function isTakenNickname(data: { nickname: string }): Promise<boolean> {
  const res = await axios.get(import.meta.env.VITE_NICK_CHECK_URL, {
    params: { nickname: data.nickname },
  });
  console.log(res);
  if (res.data === true) {
    //중복임
    console.log('중복임');
    return true;
  } else {
    //중복 아님
    console.log('중복 아님');
    return false;
  }
}
