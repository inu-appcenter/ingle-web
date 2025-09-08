import { logout } from '@/profile/api/profile';
import { ROUTES } from '@/router/routes';
import DeleteIcon from '@/shared/assets/icons/delete-icon.svg?react';
import InformationIcon from '@/shared/assets/icons/information-icon.svg?react';
import LogoutIcon from '@/shared/assets/icons/logout-icon.svg?react';
import NextIcon from '@/shared/assets/icons/next-icon.svg?react';
import QuestionIcon from '@/shared/assets/icons/question-icon.svg?react';
import { useAuthStore } from '@/shared/stores/authStore';
import { useNavigate } from 'react-router';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { clearTokens } = useAuthStore();

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
    <main className="flex flex-col px-4 items-center">
      {/* 프로필 사진 */}
      <div className="mt-16 rounded-full bg-[#d9d9d9] w-32 h-32 mb-8">
        <img />
      </div>
      {/* 닉네임 & 이메일 */}
      <div className="flex flex-col items-center gap-1 mb-4">
        <p className="text-2xl font-bold ">Jung Youdahm</p>
        <p className="text-sm">youdarmjung@inu.ac.kr</p>
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
            <QuestionIcon />
            <p>Support</p>
          </div>
          <NextIcon />
        </button>
        <button
          onClick={() => {
            navigate(`${ROUTES.PROFILE}/delete`);
          }}
          className="flex items-center rounded-lg bg-[#F4F2F6] h-10 px-4 justify-between"
        >
          <div className="flex flex-row gap-4 items-center">
            <DeleteIcon />
            <p>Delete Account</p>
          </div>
          <NextIcon />
        </button>
      </section>

      {/* 인포메이션 아이템 : 앱 버전 */}
      <section className="w-full flex flex-col gap-2.5 mb-20">
        <h4 className="text-sm">information</h4>
        <button className="flex rounded-lg items-center bg-[#F4F2F6] h-10 px-4 justify-between">
          <div className="flex flex-row gap-4 items-center">
            <InformationIcon />
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
            <LogoutIcon />
            <p className="text-[#D51D20]">Log out</p>
          </div>
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
