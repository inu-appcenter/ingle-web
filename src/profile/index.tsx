import api from '@/shared/api/intercepter';

const ProfilePage = () => {
  const handleDeleteId = async () => {
    try {
      const res = await api.post(import.meta.env.VITE_PORTAL_URL);

      if (res.status === 200) {
        setStudentInfo({
          studentId: res.data.studentId,
          department: res.data.department,
          studentType: res.data.studentType,
          nickname: res.data.nickname,
        });
        setTokens(res.data.accessToken, res.data.accessTokenExpiresDate);
        console.log('로그인 성공');
        navigate(ROUTES.TUTORIAL);
      } else if (res.status === 202) {
        alert(res.data.message); //회원가입이 필요합니다
        setStudentInfo({ portalId: res.data.studentId });
        setStep('studentInfo');
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        alert(err.response.data.message); // 로그인이 실패하였습니다
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      프로필 페이지입니다
      <button onClick={handleDeleteId}>탈퇴하기</button>
    </div>
  );
};

export default ProfilePage;
