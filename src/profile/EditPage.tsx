import { Dropdown } from '@/auth/components/infoSteps/DepartmentSelect';
import { UndergraduateDepartment } from '@/auth/constants/Departments';
import { editMembers } from '@/profile/api/profile';
import Header from '@/profile/components/Header';
import ProfileButton from '@/profile/components/ProfileButton';
import { LazyImage } from '@/shared/components/LazyImage';
import EditIcon from '@/shared/assets/icons/edit-icon.svg?react';
// import testImage from '@/shared/assets/images/stamp/clubs-image.png';
import { useAuthStore } from '@/shared/stores/authStore';
import { useState } from 'react';
import { useProfileStore } from '@/profile/stores/profile-store';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/router/routes';

const EditPage = () => {
  const { studentId, nickname, studentType, department } = useAuthStore();
  const { imageUrl } = useProfileStore();

  // 기존 store 값으로 초기화
  const [editedNickname, setEditedNickname] = useState(nickname);
  const [editedStudentId, setEditedStudentId] = useState(studentId);
  const [editedDepartment, setEditedDepartment] = useState(department);
  const [status, setStatus] = useState(studentType);
  const [country, setCountry] = useState('SOUTH_KOREA'); // 기본값 추가
  const [openDropdown, setOpenDropdown] = useState<null | 'department' | 'status'>(null);
  const navigate = useNavigate();

  // [ ] 현재 undergraduate 대학만 나타내고 있다.
  const departmentList = [
    'HUMANITIES',
    'NATURAL_SCIENCES',
    'SOCIAL_SCIENCES',
    'COMMERCE_PUBLIC_AFFAIRS',
    'ENGINEERING',
    'INFORMATION_TECHNOLOGY',
    'BUSINESS',
    'ARTS_PHYSICAL_EDUCATION',
    'EDUCATION',
    'URBAN_SCIENCE',
    'LIFE_SCIENCES_BIOENGINEERING',
    'NORTHEAST_ASIAN_STUDIES',
    'LAW',
  ].flatMap(key => UndergraduateDepartment[key]);

  const statusList = [
    { label: 'Exchange Student', value: 'EXCHANGE' },
    { label: 'Language Student', value: 'LANGUAGE' },
    { label: 'Undergraduate Student', value: 'UNDERGRADUATE' },
    { label: 'Graduate Student', value: 'GRADUATE' },
    { label: 'Other', value: 'OTHER' },
  ];

  const handleButton = async () => {
    try {
      await editMembers(
        editedStudentId,
        editedDepartment,
        status,
        editedNickname,
        country, // ✅ country 전달
      );
      alert('프로필이 수정되었습니다.');
    } catch (error) {
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-[#F9F9F9]"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      {/* 상단 헤더 */}
      <Header>Edit Profile</Header>

      {/* 메인 영역 */}
      <main className="flex flex-col flex-1">
        {/* 프로필 */}
        <section className="flex flex-col justify-center items-center my-4">
          <div className="relative">
            {imageUrl ? (
              <LazyImage
                src={imageUrl}
                alt="profile-image"
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-[#d9d9d9]" />
            )}

            <EditIcon
              className="absolute bottom-2 right-2 w-6 h-6 cursor-pointer transition-all duration-200 hover:brightness-0 hover:saturate-100 hover:invert hover:sepia hover:hue-rotate-[270deg] hover:contrast-100"
              style={{
                filter: 'none',
                transition: 'filter 0.2s ease-in-out',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter =
                  'brightness(0) saturate(100%) invert(27%) sepia(100%) saturate(7500%) hue-rotate(270deg) contrast(100%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'none';
              }}
              onClick={e => {
                navigate(ROUTES.PROFILE_EDIT_IMAGE);
              }}
            />
          </div>
          <p className="text-xl font-bold">{editedNickname}</p>
        </section>

        {/* 입력창 */}
        <section className="mt-auto px-4 rounded-t-[30px] bg-[#ffffff] pt-6 pb-8">
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Nickname</p>
            <input
              type="text"
              value={editedNickname}
              onChange={e => setEditedNickname(e.target.value)}
              className="border border-[rgba(84,76,76,0.14)] w-full h-11 rounded-md outline-none px-4 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Student ID</p>
            <input
              type="text"
              value={editedStudentId}
              onChange={e => setEditedStudentId(e.target.value)}
              className="border border-[rgba(84,76,76,0.14)] w-full h-11 rounded-md outline-none px-4 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Department</p>
            <Dropdown
              label=""
              options={departmentList}
              selectedValue={editedDepartment}
              onChange={value => setEditedDepartment(value)}
              isOpen={openDropdown === 'department'}
              onToggle={() =>
                setOpenDropdown(prev => (prev === 'department' ? null : 'department'))
              }
            />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <p className="text-base font-bold">Current Status</p>
            <Dropdown
              label=""
              options={statusList}
              selectedValue={status}
              onChange={value => setStatus(value)}
              isOpen={openDropdown === 'status'}
              onToggle={() =>
                setOpenDropdown(prev => (prev === 'status' ? null : 'status'))
              }
            />
          </div>

          <ProfileButton onClick={handleButton}>Save</ProfileButton>
        </section>
      </main>
    </div>
  );
};

export default EditPage;
