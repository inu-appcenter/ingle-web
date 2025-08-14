import Complete from '@/auth/components/Complete';
import Intro from '@/auth/components/Intro';
import Portal from '@/auth/components/Portal';
import StudentInfoStep from '@/auth/components/StudentInfoStep';
import { useAuthStore } from '@/auth/stores/authStore';

//로그인 화면 구현
const AuthPage = () => {
  const currentStep = useAuthStore(state => state.currentStep);

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
