import ExchangeIcon from '@/auth/images/exchange.svg?url';
import GraduateIcon from '@/auth/images/graduate.svg?url';
import LanguageIcon from '@/auth/images/language.svg?url';
import UngraduateIcon from '@/auth/images/ungraduate.svg?url';
import { useAuthStore } from '@/auth/stores/authStore';

type StatusCardProps = {
  status: string;
  isSelected?: boolean;
  icon: string;
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
        <img src={icon} alt={`${status} icon`} className="w-20 h-20 text" />
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
  const studentType = useAuthStore(state => state.studentType);
  const setStudentInfo = useAuthStore(state => state.setStudentInfo);

  const statusOptions = [
    { option: 'Exchange\nStudent', icon: ExchangeIcon },
    { option: 'Language\nStudent', icon: LanguageIcon },
    { option: 'Ungraduate\nStudent', icon: UngraduateIcon },
    { option: 'Graduate\nStudent', icon: GraduateIcon },
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
              isSelected={studentType === status.option}
              onClick={() =>
                setStudentInfo(
                  studentType === status.option
                    ? { studentType: '' }
                    : { studentType: status.option },
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
