import GraduateIcon from '@/auth/images/status-select/briefcase.svg?react';
import LanguageIcon from '@/auth/images/status-select/bubble.svg?react';
import ExchangeIcon from '@/auth/images/status-select/earth.svg?react';
import UngraduateIcon from '@/auth/images/status-select/pencil.svg?react';
import { useAuthStore } from '@/shared/stores/authStore';
import { ReactNode } from 'react';

type StatusCardProps = {
  status: string;
  isSelected?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

function StatusCard({ status, isSelected, icon, onClick }: StatusCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex flex-col gap-1 items-center justify-center w-full  ${icon ? 'aspect-[4/5] py-4' : 'py-3'} rounded-3xl transition-colors ${
          isSelected ? 'bg-[#7A00E6] text-white' : 'bg-white text-[#3C3C43]'
        }`}
        style={{
          boxShadow: '0 4px 30px rgba(112, 112, 112, 0.2)',
        }}
      >
        {icon}
        <p
          className={`font-inter font-semibold text-gray-500 text-base text-center font-medium whitespace-pre-line transition-colors ${
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
      icon: <ExchangeIcon className="w-[50%]" />,
      value: 'EXCHANGE',
    },
    {
      option: 'Language\nStudent',
      icon: <LanguageIcon className="w-[50%]" />,
      value: 'LANGUAGE',
    },
    {
      option: 'Ungraduate\nStudent',
      icon: <UngraduateIcon className="h-[50%] my-2" />,
      value: 'UNDERGRADUATE',
    },
    {
      option: 'Graduate\nStudent',
      icon: <GraduateIcon className="w-[50%]" />,
      value: 'GRADUATE',
    },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {statusOptions.map((status, index) => (
          <div className="basis-[43%] max-w-[45%]">
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
        <div className="w-36 h-12">
          <StatusCard
            status="Others"
            isSelected={studentType === 'OTHERS'}
            onClick={() =>
              setStudentInfo(
                studentType === 'OTHERS'
                  ? { studentType: '' }
                  : { studentType: 'OTHERS' },
              )
            }
          />
        </div>
      </div>
    </>
  );
}

export default StatusSelect;
