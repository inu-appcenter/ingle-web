import { useAuthStore } from '@/auth/stores/authStore';
import { ROUTES } from '@/router/routes';
import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

//요청 인터셉터
instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

//응답 인터셉터
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // accessToken 만료
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        const res = await axios.post('/auth/refresh');
        const newAccessToken = res.data.accessToken;
        const newExpireDate = res.data.accessTokenExpiresDate;

        useAuthStore.getState().setTokens(newAccessToken, newExpireDate);

        // 실패했던 요청 헤더 갱신 후 재시도
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(error.config);
      } catch (err: any) {
        const { clearTokens } = useAuthStore.getState();

        if (err.response.status === 400) {
          alert(err.response.data.message); //리프레시 토큰 불일치
        } else if (err.response.status === 404) {
          alert(err.response.data.message); //[Jwt] 리프레시 토큰 조회 실패
        } else if (err.response.status === 420) {
          alert(err.response.data.message); // 만료된 리프레시 토큰
          clearTokens();
          window.location.href = ROUTES.AUTH;
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
