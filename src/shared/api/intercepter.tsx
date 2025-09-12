import { useAuthStore } from '@/shared/stores/authStore';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

//로그인 되어 있을 때 사용하는 api
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

//요청 인터셉터
api.interceptors.request.use(
  config => {

    const access = localStorage.getItem('AccessToken');

    if (access) {
      config.headers['Authorization'] = `Bearer ${access}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

//응답 인터셉터
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // accessToken 만료
    const originalRequest = error.config;

    if (originalRequest.url.includes('/auth/refresh')) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      try {
        const res = await api.post('/auth/refresh');
        const newAccessToken = res.data.accessToken;
        const newExpireDate = res.data.accessTokenExpiresDate;

        useAuthStore.getState().setTokens(newAccessToken, newExpireDate);

        // 실패했던 요청 헤더 갱신 후 재시도
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (err: any) {
        const { clearTokens } = useAuthStore.getState();

        if (err.response.status === 400) {
          alert(err.response.data.message); //리프레시 토큰 불일치
        } else if (err.response.status === 404) {
          alert(err.response.data.message); //[Jwt] 리프레시 토큰 조회 실패
        } else if (err.response.status === 420) {
          alert(err.response.data.message); // 만료된 리프레시 토큰
          clearTokens();
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
