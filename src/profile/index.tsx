import { logout } from '@/profile/api/profile';
import { ROUTES } from '@/router/routes';
import { useAuthStore } from '@/shared/stores/authStore';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useProfileStore } from '@/profile/stores/profile-store';
import { getProfile } from '@/profile/api/profile';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { clearTokens } = useAuthStore();
  const {
    memberId,
    studentId,
    department,
    studentType,
    country,
    nickname,
    imageUrl,
    setProfile,
  } = useProfileStore();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile(); // 실제 API 함수 import 필요
      console.log(res);
      setProfile(
        res.memberId,
        res.studentId,
        res.department,
        res.studentType,
        res.country,
        res.nickname,
        res.imageUrl,
      );
    };
    fetchProfile();
  }, []);

  const handleLogoutButton = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    } finally {
      clearTokens();
      navigate('/');
    }
  };

  return (
    <main className="flex flex-col px-4 items-center text-black">
      {/* 프로필 사진 */}
      <div className="mt-16 rounded-full bg-[#d9d9d9] w-32 h-32 mb-8">
        {imageUrl && <img src={imageUrl} alt="Profile" />}
      </div>
      {/* 닉네임 & 이메일 */}
      <div className="flex flex-col items-center gap-1 mb-4">
        <p className="text-2xl font-bold ">{nickname}</p>
        {/* <p className="text-sm">{email || ''}</p> */}
      </div>

      {/* 프로필 수정 버튼 */}
      <button
        onClick={() => {
          navigate(`${ROUTES.PROFILE}/edit`);
        }}
        className="bg-[#313131] px-2 text-[#ffffff] rounded-[30px] py-1"
      >
        Edit Profile
      </button>

      {/* 세팅 리스트 & 세팅 아이템 */}
      <section className="w-full gap-2.5 flex flex-col mb-20">
        <h4 className="text-sm">settings</h4>
        <button
          onClick={() => {
            navigate(`${ROUTES.PROFILE}/support`);
          }}
          className="rounded-lg flex items-center bg-[#F4F2F6] h-10 px-4 justify-between"
        >
          <div className="flex flex-row gap-4 items-center">
            <img src="/icons/question-icon.svg" alt="Support" className="w-5 h-5" />
            <p>Support</p>
          </div>
          <img src="/icons/next-icon.svg" alt="Next" className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            navigate(`${ROUTES.PROFILE}/delete`);
          }}
          className="flex items-center rounded-lg bg-[#F4F2F6] h-10 px-4 justify-between"
        >
          <div className="flex flex-row gap-4 items-center">
            <img src="/icons/delete-icon.svg" alt="Delete" className="w-5 h-5" />
            <p>Delete Account</p>
          </div>
          <img src="/icons/next-icon.svg" alt="Next" className="w-5 h-5" />
        </button>
      </section>

      {/* 인포메이션 아이템 : 앱 버전 */}
      <section className="w-full flex flex-col gap-2.5 mb-20">
        <h4 className="text-sm">information</h4>
        <button className="flex rounded-lg items-center bg-[#F4F2F6] h-10 px-4 justify-between">
          <div className="flex flex-row gap-4 items-center">
            <img
              src="/icons/information-icon.svg"
              alt="Information"
              className="w-5 h-5"
            />
            <p>App version</p>
          </div>
          <p className="mr-2">v 1.0.0</p>
        </button>
      </section>

      {/* 로그아웃 버튼 */}
      <section className="w-full flex flex-col gap-2.5 ">
        <button
          onClick={handleLogoutButton}
          className="flex rounded-lg items-center bg-[#F4F2F6] h-10 px-4 justify-between"
        >
          <div className="flex flex-row gap-4 items-center">
            <img src="/icons/logout-icon.svg" alt="Logout" className="w-5 h-5" />
            <p className="text-[#D51D20]">Log out</p>
          </div>
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
