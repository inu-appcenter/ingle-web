import { ROUTES } from '@/router/routes';
import api from '@/shared/api/intercepter';
import { useAuthStore } from '@/shared/stores/authStore';
import { useNavigate } from 'react-router';

// [ ] 500번 서버 오류 뜸.
const ProfilePage = () => {
  const navigate = useNavigate();

  const handleDeleteId = async () => {
    try {
      const res = await api.delete(import.meta.env.VITE_DELETE_ID_URL);
      const { clearTokens, setStudentInfo } = useAuthStore();

      if (res.status === 204) {
        setStudentInfo({
          currentStep: 'intro',
          studentType: '',
          portalId: '',
          department: '',
          studentId: '',
          nickname: '',
        });
        clearTokens();
        alert('회원 탈퇴 성공');
        navigate(ROUTES.TUTORIAL);
      }
    } catch (err: any) {
      if (err.response?.status === 404) {
        alert(err.response?.data.message); // 회원을 찾을 수 없습니다.
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      <p>프로필 페이지입니다</p>
      <button className="bg-orange-200" onClick={handleDeleteId}>
        탈퇴하기
      </button>
    </div>
  );
};

export default ProfilePage;
