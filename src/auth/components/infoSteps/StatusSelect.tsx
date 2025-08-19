import GraduateIcon from '@/auth/images/status-select/briefcase.svg?react';
import LanguageIcon from '@/auth/images/status-select/bubble.svg?react';
import ExchangeIcon from '@/auth/images/status-select/earth.svg?react';
import UngraduateIcon from '@/auth/images/status-select/pencil.svg?react';
import { useAuthStore } from '@/auth/stores/authStore';
import { ReactNode } from 'react';

type StatusCardProps = {
  status: string;
  isSelected?: boolean;
  icon: ReactNode;
  onClick?: () => void;
};

function StatusCard({ status, isSelected, icon, onClick }: StatusCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center w-full aspect-[4/5] rounded-3xl transition-colors ${
          isSelected ? 'bg-[#7A00E6] text-white' : 'bg-white text-[#3C3C43]'
        }`}
        style={{
          boxShadow: '0 4px 30px rgba(112, 112, 112, 0.2)',
        }}
      >
        {icon}
        <p
          className={`mt-4 font-inter font-semibold text-gray-500 text-base text-center font-medium whitespace-pre-line transition-colors ${
            isSelected ? 'text-white' : 'text-gray-[#3C3C4399]'
          }`}
        >
          {status}
        </p>
      </button>
    </>
  );
}

function StatusSelect() {
  const { studentType, setStudentInfo } = useAuthStore();

  const statusOptions = [
    {
      option: 'Exchange\nStudent',
      icon: <ExchangeIcon />,
      value: 'EXCHANGE',
    },
    {
      option: 'Language\nStudent',
      icon: <LanguageIcon />,
      value: 'LANGUAGE',
    },
    {
      option: 'Ungraduate\nStudent',
      icon: <UngraduateIcon />,
      value: 'UNDERGRADUATE',
    },
    {
      option: 'Graduate\nStudent',
      icon: <GraduateIcon />,
      value: 'GRADUATE',
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {statusOptions.map((status, index) => (
          <div className="basis-[45%] max-w-[45%]">
            <StatusCard
              key={index}
              status={status.option}
              icon={status.icon}
              isSelected={studentType === status.value}
              onClick={() =>
                setStudentInfo(
                  studentType === status.value
                    ? { studentType: '' }
                    : { studentType: status.value },
                )
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default StatusSelect;
