import { useAuthStore } from '@/auth/stores/authStore';
import ExchangeIcon from '../../images/exchange.svg';
import GraduateIcon from '../../images/graduate.svg';
import LanguageIcon from '../../images/language.svg';
import UngraduateIcon from '../../images/ungraduate.svg';

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
          isSelected ? 'bg-purple-500 text-white' : 'bg-white text-gray-800'
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
    'Exchange\nStudent',
    'Language\nStudent',
    'Ungraduate\nStudent',
    'Graduate\nStudent',
  ];

  const icons = [ExchangeIcon, LanguageIcon, UngraduateIcon, GraduateIcon];

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {statusOptions.map((status, index) => (
          <div className="basis-[45%] max-w-[45%]">
            <StatusCard
              key={index}
              status={status}
              icon={icons[index]}
              isSelected={studentType === status}
              onClick={() =>
                setStudentInfo(
                  studentType === status
                    ? { studentType: '' }
                    : { studentType: status },
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
