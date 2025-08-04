import { useAuthStore } from '@/auth/stores/authStore';

type StatusCardProps = {
  status: string;
  isSelected?: boolean;
  onClick?: () => void;
};

function StatusCard({ status, isSelected, onClick }: StatusCardProps) {
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
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mb-2" />
        {status && (
          <p className="font-inter font-semibold text-gray-500 text-base text-center font-medium whitespace-pre-line">
            {status}
          </p>
        )}
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

  return (
    <>
      <div className="flex flex-wrap item-center justify-center gap-6 mt-4">
        {statusOptions.map((status, index) => (
          <div className="basis-[45%] max-w-[45%]">
            <StatusCard
              key={index}
              status={status}
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
      <h1>잘 바뀌는지 확인 {studentType}</h1>
    </>
  );
}

export default StatusSelect;
