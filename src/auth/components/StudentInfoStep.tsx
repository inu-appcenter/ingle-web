import CountrySelect from '@/auth/components/infoSteps/CountrySelect';
import DepartmentSelect from '@/auth/components/infoSteps/DepartmentSelect';
import SetNickname from '@/auth/components/infoSteps/SetNickname'; // Assuming this component exists for nickname input
import StatusSelect from '@/auth/components/infoSteps/StatusSelect';

import ArrowLeft from '@/auth/images/arrow-left.svg?react';
import { useAuthStore } from '@/shared/stores/authStore';
import axios from 'axios';
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
      <div
        className={`flex-1 h-1 rounded-full ${step == 3 ? 'bg-[#7A00E6]' : 'bg-[#C1C9D2]'}`}
      />
    </div>
  );
}

export default function StudentInfoStep() {
  const [infoStep, setInfoStep] = useState(0); // 0: 신분, 1: 국가 2: 학과, 3: 닉네임,
  const [actNext, setActNext] = useState(false);

  const {
    studentType,
    department,
    nickname,
    studentId,
    country,
    setStep,
    setStudentInfo,
    setTokens,
  } = useAuthStore();

  const stepTitles = [
    'Select your Current Status',
    'Select your Country',
    'Select your Department',
    'Enter your ID & Nickname',
  ];

  const readytoNext = () => {
    if (
      (infoStep === 0 && studentType) ||
      (infoStep === 1 && country) ||
      (infoStep === 2 && department) ||
      (infoStep === 3 && nickname && studentId)
    ) {
      setActNext(true);
    } else {
      setActNext(false); // 예외 방지
    }
  };

  useEffect(() => {
    readytoNext();
  }, [infoStep, studentType, department, nickname, studentId, country]);

  const renderContent = () => {
    if (infoStep === 0) {
      return <StatusSelect />;
    } else if (infoStep === 1) {
      return <CountrySelect />;
    } else if (infoStep === 2) {
      return <DepartmentSelect />;
    } else if (infoStep === 3) {
      return <SetNickname />;
    } else {
      return null; // Return null if none of the conditions are met
    }
  };

  async function SignUp(data: {
    studentId: string;
    department: string;
    studentType: string;
    nickname: string;
    country: string;
  }) {
    const res = await axios.post(import.meta.env.VITE_SIGN_UP_URL, data);
    try {
      if (res.status === 201) {
        //회원가입 성공
        setStudentInfo({
          studentId: res.data.studentId,
          department: res.data.department,
          studentType: res.data.studentType,
          nickname: res.data.nickname,
          country: res.data.country,
        });
        setTokens(res.data.accessToken, res.data.accessTokenExpiresDate);

        alert('회원가입 성공');
        setStep('finish');
      }
    } catch (err: any) {
      console.log(err.response?.data);
      alert('회원가입에 실패하였습니다. 다시 시도해주세요');
    }
  }

  const settingStep = () => {
    if (!actNext) return;

    setActNext(false);

    if (infoStep < 3) {
      setInfoStep(infoStep + 1);
    } else if (infoStep === 3) {
      SignUp({
        studentType: studentType,
        department: department,
        nickname: nickname,
        studentId: studentId,
        country: country,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
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
        <h1 className="mb-6 px-2 font-extrabold text-4xl text-pretty leading-[1.2]">
          {stepTitles[infoStep]}
        </h1>
        {renderContent()}
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
          onClick={settingStep}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
