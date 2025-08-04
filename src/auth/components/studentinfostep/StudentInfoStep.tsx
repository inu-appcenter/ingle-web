/* 학생 정보 등록
    - 진행바
    - 제목
    - 내용(3단계:신분/학과/닉네임)
    - 다음 버튼
*/

import { useAuthStore } from '@/auth/stores/authStore';
import { useEffect, useState } from 'react';
import DepartmentSelect from './DepartmentSelect';
import SetNickname from './SetNickname'; // Assuming this component exists for nickname input
import StatusSelect from './StatusSelect';

//단계 구분 변수 useStat

function StudentInfoStep() {
  const [infoStep, setInfoStep] = useState(0); // 0: 신분, 1: 학과, 2: 닉네임
  const [moveNext, setMoveNext] = useState(false);
  // 다음단계로 넘어갈 수 있는지 여부는 zustand에 각 단계별 속성이 채워졌는가에 따름.
  // 단계가 넘어갈때마다 리셋
  const studentType = useAuthStore(state => state.studentType);
  const department = useAuthStore(state => state.department);
  const nickname = useAuthStore(state => state.nickname);

  const stepTitles = [
    'Select your Current Status',
    'Select Your Department',
    'Enter Your student ID & Nickname',
  ];

  const readytoNext = () => {
    if (infoStep === 0) {
      setMoveNext(studentType !== '');
    } else if (infoStep === 1) {
      setMoveNext(department !== '');
    } else if (infoStep === 2) {
      setMoveNext(nickname !== '');
    } else {
      setMoveNext(false); // 예외 방지
    }
  };

  useEffect(() => {
    readytoNext();
  }, [infoStep, studentType, department, nickname]);

  const renderContent = () => {
    switch (infoStep) {
      case 0:
        return <StatusSelect />;
      case 1:
        return <DepartmentSelect />;
      case 2:
        return <SetNickname />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen">
      {/* 위쪽 */}

      <h1>-----진행바-----</h1>
      <div className="w-full max-w-2xl p-8">
        <h1 className="font-manrope font-extrabold text-4xl text-pretty pt-6 p-4 leading-[1.2]">
          {stepTitles[infoStep]}
        </h1>
        {renderContent()}
      </div>

      {/* 아래쪽 */}
      <button
        disabled={!moveNext}
        className={`m-8 w-[80%] h-12 border border-color-gray rounded-2xl transition-colors duration-300 
          ${
            moveNext
              ? 'bg-purple-500 text-white border-purple-500 cursor-pointer'
              : 'bg-whilt text-gray cursor-not-allowed'
          }`}
        onClick={() => {
          if (!moveNext) return;
          setInfoStep(infoStep + 1);
          setMoveNext(false); //다음 버튼 누르면 단계 넘어가면서 버튼 비활성화
        }}
      >
        NEXT
      </button>
    </div>
  );
}

export default StudentInfoStep;
