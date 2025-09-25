import { ROUTES } from '@/router/routes';
import { useNavigate } from 'react-router';

const chkAccessToken = () => {
  const accessToken = localStorage.getItem('AccessToken'); //access 토큰
  const expire = localStorage.getItem('AccessTokenExpireTime'); //access 토큰 만료일
  const expireDate = expire ? new Date(expire).getTime() : null;
  const today = new Date().getTime();
  const navigate = useNavigate();
  console.log('access 토큰 검사 함수');

  if (accessToken && expireDate != null && today < expireDate) {
    navigate(ROUTES.TUTORIAL);
  }
};
