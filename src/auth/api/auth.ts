import { useAuthStore } from '@/auth/stores/authStore';
import axios from 'axios';

axios.defaults.withCredentials = true; //쿠키 사용 위함
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

//요청 인터셉터
axios.interceptors.request.use(
  config => {
    const accessToken = useAuthStore();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // [ ] 로그인되어 있고, access 토큰 만료됐으면 재발급 ㄱㄱ

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

//응답 인터셉터
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
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
