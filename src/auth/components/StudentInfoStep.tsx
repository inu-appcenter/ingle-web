import { SignUp } from '@/auth/api/auth';
import DepartmentSelect from '@/auth/components/infoSteps/DepartmentSelect';
import SetNickname from '@/auth/components/infoSteps/SetNickname'; // Assuming this component exists for nickname input
import StatusSelect from '@/auth/components/infoSteps/StatusSelect';
import ArrowLeft from '@/auth/images/arrow-left.svg?react';
import { useAuthStore } from '@/auth/stores/authStore';
import { useEffect, useState } from 'react';

//단계 구분 변수 useStat

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex gap-2 items-center justify-stretch w-full pb-2">
      <div
        className={`flex-1 h-1 rounded-full ${step == 0 ? 'bg-[#7A00E6]' : 'bg-[#C1C9D2]'}`}
      />
      <div
        className={`flex-1 h-1 rounded-full ${step == 1 ? 'bg-[#7A00E6]' : 'bg-[#C1C9D2]'}`}
      />
      <div
        className={`flex-1 h-1 rounded-full ${step == 2 ? 'bg-[#7A00E6]' : 'bg-[#C1C9D2]'}`}
      />
    </div>
  );
}

export default function StudentInfoStep() {
  const [infoStep, setInfoStep] = useState(0); // 0: 신분, 1: 학과, 2: 닉네임,
  const [actNext, setActNext] = useState(false);
  // 다음단계로 넘어갈 수 있는지 여부는 zustand에 각 단계별 속성이 채워졌는가에 따름.
  // 단계가 넘어갈때마다 리셋

  const { studentType, department, nickname, studentId, setStep, setStudentInfo } =
    useAuthStore();

  const stepTitles = [
    'Select your Current Status',
    'Select Your Department',
    'Enter Your ID & Nickname',
  ];

  const readytoNext = () => {
    if (
      (infoStep === 0 && studentType) ||
      (infoStep === 1 && department) ||
      (infoStep === 2 && nickname && studentId)
    ) {
      setActNext(true);
    } else {
      setActNext(false); // 예외 방지
    }
  };

  useEffect(() => {
    readytoNext();
  }, [infoStep, studentType, department, nickname, studentId]);

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
      {/* 상단 : 상태바 */}
      <div className="flex flex-col w-full max-w-2xl px-7 pt-7">
        <StepBar step={infoStep} />
      </div>

      {/* 중간 : 뒤로가기, 단계제목, 내용 */}
      <div className="w-full max-w-2xl px-4 flex-1">
        <button
          onClick={() => {
            setInfoStep(infoStep - 1);
            setStudentInfo({ nickname: '' });
          }}
          className="p-3"
          aria-label="Go back"
          disabled={infoStep === 0}
          style={{
            visibility: infoStep > 0 ? 'visible' : 'hidden',
          }}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="mb-8 px-2 font-manrope font-extrabold text-4xl text-pretty leading-[1.2]">
          {stepTitles[infoStep]}
        </h1>
        {renderContent()}
      </div>
      <div>
        포털id : {studentId}
        <br />
        닉네임 : {nickname}
      </div>
      {/* 다음 버튼 */}
      <div className="w-full flex justify-center p-7">
        <button
          disabled={!actNext}
          className={`w-full h-12 border border-color-gray rounded-2xl transition-colors duration-200 
          ${
            actNext
              ? 'bg-[#7A00E6] text-white border-purple-500 cursor-pointer'
              : 'bg-white text-gray cursor-not-allowed'
          }`}
          onClick={() => {
            if (!actNext) return;
            setActNext(false);
            if (infoStep < 2) {
              setInfoStep(infoStep + 1);
            } else if (infoStep === 2) {
              //마지막 상태에서

              SignUp({
                //회원가입 api
                studentType: studentType,
                studentId: studentId,
                department: department,
                nickname: nickname,
              });
              setStep('finish');

              //회원가입 완료.
              // 회원 정보 보내기. 및 회원가입 완료 화면
              //회원가입 api 호출 필요
              //(여기서 회원가입이란 ingle 회원가입을 의미)
              //
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
