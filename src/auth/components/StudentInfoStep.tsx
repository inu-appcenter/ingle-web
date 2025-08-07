import { useAuthStore } from '@/auth/stores/authStore';
import { useEffect, useState } from 'react';
import arrowLeft from '../images/arrow-left.svg?url';
import DepartmentSelect from './infoSteps/DepartmentSelect';
import SetNickname from './infoSteps/SetNickname'; // Assuming this component exists for nickname input
import StatusSelect from './infoSteps/StatusSelect';

//단계 구분 변수 useStat

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex gap-2 items-center justify-stretch w-full pb-2">
      <div
        className={`flex-1 h-1 rounded-full ${step == 0 ? 'bg-[#7A00E6]' : 'bg-gray-200'}`}
      />
      <div
        className={`flex-1 h-1  rounded-full ${step == 1 ? 'bg-[#7A00E6]' : 'bg-gray-200'}`}
      />
      <div
        className={`flex-1 h-1 rounded-full ${step == 2 ? 'bg-[#7A00E6]' : 'bg-gray-200'}`}
      />
    </div>
  );
}

export default function StudentInfoStep() {
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
    'Enter Your ID & Nickname',
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
      {/* 상단 : 상태바, 뒤로가기 */}
      <div className="flex flex-col w-full max-w-2xl px-7 pt-7">
        <StepBar step={infoStep} />
      </div>

      {/* 중간 : 단계제목, 내용 */}
      <div className="w-full max-w-2xl px-7 flex-1">
        <button
          onClick={() => setInfoStep(infoStep - 1)}
          className="p-3"
          aria-label="Go back"
          disabled={infoStep === 0}
          style={{
            visibility: infoStep > 0 ? 'visible' : 'hidden',
          }}
        >
          <img src={arrowLeft} alt="" className="w-6 h-6" />
        </button>
        <h1 className="mb-8 px-2 font-manrope font-extrabold text-4xl text-pretty leading-[1.2]">
          {stepTitles[infoStep]}
        </h1>
        {renderContent()}
      </div>

      {/* 다음 버튼 */}
      <div className="w-full flex justify-center p-7">
        <button
          disabled={!moveNext}
          className={`w-full h-12 border border-color-gray rounded-2xl transition-colors duration-300 
          ${
            moveNext
              ? 'bg-purple-500 text-white border-purple-500 cursor-pointer'
              : 'bg-white text-gray cursor-not-allowed'
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
    </div>
  );
}
