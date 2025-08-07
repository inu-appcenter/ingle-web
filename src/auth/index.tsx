import Intro from './components/Intro';
import Portal from './components/Portal';
import StudentInfoStep from './components/StudentInfoStep';
import { useAuthStore } from './stores/authStore';

//로그인 화면 구현
const AuthPage = () => {
  const currentStep = useAuthStore(state => state.currentStep);

  return (
    <>
      {currentStep === 'intro' && <Intro />}
      {currentStep === 'portal' && <Portal />}
      {currentStep === 'studentInfo' && <StudentInfoStep />}
      {/*완료화면*/}
    </>
  );
};

export default AuthPage;
