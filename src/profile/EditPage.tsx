import Header from '@/profile/components/Header';
import testImage from '@/shared/assets/images/stamp/clubs-image.png';
import EditIcon from '@/shared/assets/icons/edit-icon.svg?react';
import { useState } from 'react';
import ProfileButton from '@/profile/components/ProfileButton';
import DepartmentSelect, { Dropdown } from '@/auth/components/infoSteps/DepartmentSelect';
import { departmentOptions } from '@/auth/constants/Departments';
import { useAuthStore } from '@/auth/stores/authStore';
import { editMembers } from '@/profile/api/profile';

const EditPage = () => {
  const [image, setImage] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const { studentId, nickname, studentType, department, setStudentInfo } = useAuthStore();

  const [openDropdown, setOpenDropdown] = useState<null | 'department' | 'status'>(null);
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
  ].flatMap(key => departmentOptions[key]);
  const [status, setStatus] = useState<string>('');
  const statusList = [
    { label: 'Exchange Student', value: 'EXCHANGE' }, // 교환학생
    { label: 'Language Student', value: 'LANGUAGE' }, // 어학연수생
    { label: 'Undergraduate Student', value: 'UNDERGRADUATE' }, // 학부생
    { label: 'Graduate Student', value: 'GRADUATE' }, // 대학원생
    { label: 'Other', value: 'OTHER' }, // 기타
  ];

  const handleButton = () => {
    console.log(studentId, department, studentType, nickname);
    editMembers(studentId, department, studentType, nickname);
  };

  return (
    <div
      className="flex flex-col h-screen bg-[#F9F9F9]"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      {/* 상단 헤더 */}
      <Header>Edit Profile</Header>

      {/* 메인 영역 (프로필 + 입력창) */}
      <main className="flex flex-col flex-1">
        {/* 프로필 */}
        <section className="flex flex-col justify-center items-center my-4">
          <div className="relative">
            <img src={testImage} alt="profile-image" className="w-40 h-40" />
            <EditIcon className="absolute bottom-2 right-2" />
          </div>
          <p className="text-xl font-bold">{nickname}</p>
        </section>

        {/* 입력창 (아래쪽에 붙음) */}
        <section className="mt-auto px-4 rounded-t-[30px] bg-[#ffffff] pt-6 pb-8">
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Nickname</p>
            <input
              type="text"
              className="border border-[rgba(84,76,76,0.14)] w-full h-11 rounded-md outline-none px-4 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Student ID</p>
            <input
              type="text"
              className="border border-[rgba(84,76,76,0.14)] w-full h-11 rounded-md outline-none px-4 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-base font-bold">Department</p>
            <Dropdown
              label=""
              options={departmentList}
              selectedValue={department}
              onChange={value => setStudentInfo({ department: value })}
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
              onChange={value => {
                setStatus(value);
              }}
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
