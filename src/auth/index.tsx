import Complete from '@/auth/components/Complete';
import Intro from '@/auth/components/Intro';
import Portal from '@/auth/components/Portal';
import StudentInfoStep from '@/auth/components/StudentInfoStep';
import { ROUTES } from '@/router/routes';
import { useAuthStore } from '@/shared/stores/authStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

//로그인 화면 구현
const AuthPage = () => {
  const currentStep = useAuthStore(state => state.currentStep);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  // access 토큰 검사
  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem('AccessToken'); //access 토큰
      const expire = localStorage.getItem('AccessTokenExpireTime'); //access 토큰 만료일
      const expireDate = expire ? new Date(expire).getTime() : null;
      const today = new Date().getTime();
      console.log('access 토큰 검사 함수');

      if (!accessToken || !expireDate || today >= expireDate) {
        navigate(ROUTES.AUTH);
      } else if (accessToken && expireDate != null && today < expireDate) {
        navigate(ROUTES.TUTORIAL);
      }

      setChecked(true);
    };
    checkToken();
  }, [navigate]);

  if (!checked) return null;

  return (
    <>
      {currentStep === 'intro' && <Intro />}
      {currentStep === 'portal' && <Portal />}
      {currentStep === 'studentInfo' && <StudentInfoStep />}
      {currentStep === 'finish' && <Complete />}
      {/*완료화면*/}
    </>
  );
};

export default AuthPage;
